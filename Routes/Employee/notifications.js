const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const nodemailer = require('nodemailer');
const fs = require('fs');
let pass = 'GO.PEARL';

const io = require('../../server');

io.on('connection', ( socket ) => {

    // WHEN NEW NOTIFICATION COMES
    socket.on(
        'NewNotification', ( notify_to ) => {

            socket.broadcast.emit(
                'NotifyTheUser', notify_to
            )

        }
    )

});

router.post('/getnotifications', ( req, res ) => {

    const { EmpID } = req.body;
    
    db.getConnection(
        ( err, connection ) => {

            if ( err )
            {
                res.status(503).send(err);
                res.end();

            }else
            {
                connection.query(
                    "SELECT emp_notifications.*, ADDDATE(emp_notifications.notification_date, INTERVAL 1 DAY) `notification_date` FROM `emp_notifications` WHERE read_status = 1 AND notify_to = " + parseInt( EmpID ) + " ORDER BY notification_id ASC;" +
                    "SELECT emp_notifications.*, ADDDATE(emp_notifications.notification_date, INTERVAL 1 DAY) `notification_date` FROM `emp_notifications` WHERE read_status IS NULL AND notify_to = " + parseInt( EmpID ) + " ORDER BY notification_id ASC;",
                    ( err, rslt ) => {
            
                        if( err )
                        {
            
                            res.status(500).send(err);
                            res.end();
                            connection.release();
            
                        }else 
                        {
            
                            let arr = [];
            
                            for ( let x = 0; x < rslt[0].length; x++ )
                            {
                                arr.push( rslt[0][x] );
                            }
            
                            for ( let y = 0; y < rslt[1].length; y++ )
                            {
                                arr.push( rslt[1][y] );
                            }
            
                            res.send(arr);
                            res.end();
                            connection.release();
            
                        }
            
                    }
                )
            }

        }
    );

} );

router.post('/notified', ( req, res ) => {

    const { EmpID } = req.body;
    
    db.getConnection(
        ( err, connection ) => {

            if ( err )
            {
                res.status(503).send(err);
                res.end();

            }else
            {
                connection.query(
                    "UPDATE emp_notifications SET notified = 1 WHERE notify_to = " + EmpID,
                    ( err, rslt ) => {
            
                        if( err )
                        {
            
                            res.status(500).send(err);
                            res.end();
                            connection.release();
            
                        }else 
                        {
                            
                            res.send("OK");
                            res.end();
                            connection.release();
            
                        }
            
                    }
                )
            }

        }
    );

} );

router.post('/seennotifications', ( req, res ) => {

    const { EmpID } = req.body;
    
    db.getConnection(
        ( err, connection ) => {

            if ( err )
            {
                res.status(503).send(err);
                res.end();

            }else
            {
                connection.query(
                    "UPDATE emp_notifications SET read_status = 1 WHERE read_status is NULL AND notify_to = " + EmpID,
                    ( err, rslt ) => {
            
                        if( err )
                        {
            
                            res.status(500).send(err);
                            res.end();
                            connection.release();
            
                        }else 
                        {
                            
                            res.send( rslt );
                            res.end();
                            connection.release();
            
                        }
            
                    }
                )
            }

        }
    );

} );

router.post('/removenotifications', ( req, res ) => {

    const { EmpID, NotificationID } = req.body;

    db.getConnection(
        ( err, connection ) => {

            if ( err )
            {
                res.status(503).send(err);
                res.end();

            }else
            {
                connection.query(
                    "UPDATE emp_notifications SET read_status = 0 WHERE notification_id = " + NotificationID + " AND notify_to = " + EmpID,
                    ( err, rslt ) => {
            
                        if( err )
                        {
            
                            res.status(500).send(err);
                            res.end();
                            connection.release();
            
                        }else 
                        {
                            
                            res.send( rslt );
                            res.end();
                            connection.release();
            
                        }
            
                    }
                )
            }

        }
    );

} );

router.post('/removeallnotifications', ( req, res ) => {

    const { EmpID } = req.body;

    db.getConnection(
        ( err, connection ) => {

            if ( err )
            {

                res.status(503).send(err);
                res.end();

            }else
            {
                connection.query(
                    "UPDATE emp_notifications SET read_status = 0 WHERE notify_to = " + EmpID,
                    ( err, rslt ) => {
            
                        if( err )
                        {
            
                            res.status(500).send(err);
                            res.end();
                            connection.release();
            
                        }else 
                        {
                            
                            res.send( rslt );
                            res.end();
                            connection.release();
            
                        }
            
                    }
                )
            }

        }
    );

} );

router.post('/newnotification', ( req, res ) => {

    const { eventID, link, receiverID, senderID, Title, NotificationBody } = req.body;
    const d = new Date();

    db.getConnection(
        ( err, connection ) => {

            if ( err )
            {

                
                res.status(503).send(err);
                res.end();

            }else
            {

                // io.broadcast.emit( 'NotifyTheUser', { notify_to: receiverID } );

                connection.query(
                    "INSERT INTO emp_notifications(event_id, link, notify_to, notify_from, notification_date, notification_time, notification_title, notification_body) VALUES(?,?,?,?,?,?,?,?)",
                    [ eventID, link ? link : '', receiverID, senderID, d, d.toTimeString(), Title, NotificationBody ],
                    ( err ) => {
            
                        if( err )
                        {
            
                            console.log( err );
                            res.status(500).send(err);
                            res.end();
                            connection.release();
            
                        }else 
                        {
            
                            res.send('Success');
                            res.end();
                            connection.release();
            
                        }
            
                    }
                );
            }

        }
    );

} );

router.post('/sendmail', ( req, res ) => {

    const { receiverID, NotificationBody } = req.body;
    const d = new Date();

    db.getConnection(
        ( err, connection ) => {

            if ( err )
            {
                res.status(503).send(err);
                res.end();

            }else
            {
                connection.query(
                    "SELECT email, name FROM employees WHERE emp_id = " + parseInt(receiverID),
                    (err, rslt) => {

                        if (err) {

                            res.status(500).send(err);
                            res.end();
                            connection.release();

                        } else {

                            let transporter = nodemailer.createTransport(
                                {
                                    service: 'gmail',
                                    auth: {
                                        user: 'usman.umer0335@gmail.com',
                                        pass: pass
                                    },
                                    tls: {
                                        rejectUnauthorized: false
                                    }
                                }
                            )

                            // let htmlstream = fs.createReadStream("content.html");

                            let htmls = 
                            `
                            <div className="EmailHtmlUI" style="width: 100%; font-family: arial;">
                            <div className="EmailHtmlUIBox" style="border-radius: 10px; background-color: #f6f6f7; padding: 30px 50px;">
                                <div className="EmailBoxTop"
                                style="display: flex;  justify-content: space-between; align-items: center;margin-bottom: 30px;"
                                >
                                    <div style="width: 90%;">
                                        <h2 className="font-weight-bolder" style="color: #0DB8DE">Hey ${rslt[0].name}</h2>
                                    </div>
                                    <div style="width: 10%;">
                                        <div>
                                            <p className="font-weight-bolder"> ${ d.toDateString() } </p>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                className="EmailBoxMiddle" 
                                style="padding: 10px;   background-color: #fff;   border-radius: 5px">
                                    <div className="px-3">
                                        <h3 className="font-weight-bolder">Assalam U Alaikum</h3>
                                    </div>
                                    <div>
                                        <p> ${ NotificationBody } </p>
                                    </div>
                                </div>
                                <div className="EmailBoxBottom"
                                    style="display: flex; align-items: center; justify-content: starts; margin-top: 10px;">
                                    <div style="display: flex; justify-content: center; align-items: center; width: 10%">
                                        <img src="https://i.ibb.co/Yh1zZsv/IMG-20211012-WA0001.jpg" style="width: 100%;" alt="" />
                                    </div>
                                    <div style="height: 100%; display: flex; align-items:center; padding: 10px 0; width: 90%; margin-left: 20px;">
                                        <div style="height: 100%;">
                                            <p style="margin-top: 0; font-weight: bold; margin-bottom: 10px;">Seaboard Group</p>
                                            <p style="margin-top: 0; font-weight: bold; margin-bottom: 10px;">Headoffice</p>
                                            <p style="margin-top: 0; font-weight: bold; margin-bottom: 10px;">qfs.com.pk</p>
                                            <p style="margin-top: 0; font-weight: bold; margin-bottom: 0;">(+92-21) 35866811-14</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p >Please check your employee portal</p>
                                    <a style="background-color: #0DB8DE; color: #fff; padding: 10px;" href="https://192.168.10.14"
                                        target="_blank" rel="noreferrer">
                                        Employee Portal
                                    </a>
                                </div>
                                
                                </div>
                                </div>
                            `

                            let mailOptions = {
                                from: 'usman.umer0335@gmail.com',
                                to: rslt[0].email === null ? 'usman.umer0335@gmail.com' : rslt[0].email,
                                subject: 'Employee Portal',
                                html: htmls
                            }

                            transporter.sendMail(mailOptions, function (err, info) {

                                if (err) {

                                    console.log(err);
                                    res.status(500).send(err);
                                    res.end();
                                    connection.release();

                                } else
                                {

                                    res.send('OK');
                                    res.end();
                                    connection.release();
                                    
                                }

                            })

                        }

                    }
                )
            }

        }
    );

} );

module.exports = router;