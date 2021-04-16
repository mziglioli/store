import Cookies from 'cookies';

/**
 * This function comment is parsed by doctrine
 * @route GET api/change-language
 * @group Content - change the application language, set the new language as cookie and header 'x-store-language'
 * @returns {DefaultResponseData.model} 200 - when change the application language success
 * @returns {Error}  500 - when some error happen
 */
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