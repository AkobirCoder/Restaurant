// import express from 'express';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';
// import cors from 'cors';

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post('/send-message', async(req, res) => {
//     const {name, phone, order} = req.body;

//     const token = process.env.TELEGRAM_TOKEN_BOT;

//     const chatId = process.env.CHAT_ID;

//     try {
//         const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 chat_id: chatId,
//                 text: `Full name: ${name}, Phone number: ${phone}, Order: ${order}`,
//             }),
//         });

//         const data = await response.json();

//         if (!data.ok) {
//             throw new Error(data.description);
//         }

//         res.json({
//             status: 'success',
//             message: 'Thanks for contacting with us',
//         });
//     } catch (error) {
//         console.error('Telegram API error:', error.message);

//         res.status(500).json({
//             status: 'error',
//             message: error.message,
//         });
//     }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });





import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-message', async(req, res) => {
    const  {name, phone, order} = req.body;

    const token = process.env.TELEGRAM_TOKEN_BOT;

    const chatId = process.env.CHAT_ID;

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Full name: ${name}, Phone number: ${phone}, Order: ${order}`,
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            throw new Error(data.description);
        }

        res.json({
            status: 'success',
            message: 'Thanks for contacting with us',
        });
    } catch (error) {
        console.error('Telegram API error:', error.message);

        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});