import Cookies from 'cookies';

export default function handler(req, res) {
    console.log("handle-change-language", req.body);
    const language = req.body || "en";
    console.log("handle-change-language", language);
    try {
        const cookies = new Cookies(req, res);
        res.setHeader("x-store-language", language);
        cookies.set("x-store-language", language);
        res.status(200).json({success: true});
    } catch (e) {
        console.error("handle-change-language", e);
        res.status(500).json({success: false});
    }
}