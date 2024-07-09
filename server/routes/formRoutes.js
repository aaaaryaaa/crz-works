import express from "express";

import {uploadform1,uploadchalan,uploadRTC,uploadSS,submitform,getallformsnull,getallformsacc,getallformsrej,agetallformsacc,agetallformsnull,agetallformsrej,acceptForm,rejectForm,agetallformsrejSub} from "../controllers/formControllers.js";
import {upload } from "../middleware/multer.middleware.js"

const router=express.Router();

router.post('/upload/form1',upload.single('form1'),uploadform1);
router.post('/upload/rtc',upload.single('rtc'),uploadRTC);
router.post('/upload/ss',upload.single('ss'),uploadSS);
router.post('/upload/chalan',upload.single('chalan'),uploadchalan);
router.post('/submit',submitform);
//user ka forms
router.post('/userformsnull',getallformsnull);
router.get('/userformsacc',getallformsacc);
router.get('/userformsrej',getallformsrej);
//admin ka forms
router.post('/adminformsnull',agetallformsnull);
router.post('/adminformsacc',agetallformsacc);
router.post('/adminformsrej',agetallformsrej);
router.post('/adminProjec',agetallformsrejSub)
//accepting and rejecting
router.post('/accept',upload.single('clearancectf'),acceptForm);
router.post('/rejectForm',rejectForm);



export default router;