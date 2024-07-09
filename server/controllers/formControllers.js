
import cloudinary from 'cloudinary'
import fs from 'fs/promises'
import { config } from '../config/dbconfig.js';
import sql from 'mssql'

import AppError from "../utils/error.util.js";
const uploadform1=async(req,res,next)=>{
    try{
        const {ph_no}=req.body;
        if(req.file){
                let pubid='';
                let secureurl='';
                const options = {
                    folder:`${ph_no}`,
                    use_filename: true,
                    unique_filename: false,
                    overwrite: true,
                  };
                
                const result=await cloudinary.v2.uploader.upload(req.file.path,options);
                if(result){
                    pubid=result.public_id;
                    secureurl=result.secure_url;
                    fs.rm(`uploads/${req.file.filename}`);
                    console.log('uploaded first form');
                    res.status(200).json({
                        success:true,
                        message:"first file uploaded",
                        public_id:pubid,
                        secure_url:secureurl
                    })
                    

                }
                else{
                    res.status(500).json({
                        success:false,
                        message:"No cloudinary result"
                    })
                }
    
            }
        else{
            res.status(500).json({
                success:false,
                message:"no file uploaded"
            })


        }
    }
    catch(error){
        return next(new AppError(error,400));
    }
   

};
const uploadRTC=async(req,res,next)=>{
    try{
        const {ph_no}=req.body;
        if(req.file){
                let pubid='';
                let secureurl='';
                const options = {
                    folder:`${ph_no}`,
                    use_filename: true,
                    unique_filename: false,
                    overwrite: false,
                  };
                const result=await cloudinary.v2.uploader.upload(req.file.path,options);
                if(result){
                    pubid=result.public_id;
                    secureurl=result.secure_url;
                    
                    fs.rm(`uploads/${req.file.filename}`);
                    res.status(200).json({
                        success:true,
                        message:"rtc uploaded",
                        public_id:pubid,
                        secure_url:secureurl
                    })
                    
                }
                else{
                    return res.status(500).json({
                        success:false,
                        message:"No cloudinary result"
                    })
                }
    
            }
        else{
            res.status(500).json({
                success:false,
                message:"no file uploaded"
            })


        }
    }
    catch(error){
        return next(new AppError(error,400));
    }
    

};
const uploadSS=async(req,res,next)=>{
    try{
        const {ph_no}=req.body;
        if(req.file){
                let pubid='';
                let secureurl='';
                const options = {
                    folder:`${ph_no}`,
                    use_filename: true,
                    unique_filename: false,
                    overwrite: false,
                  };
                const result=await cloudinary.v2.uploader.upload(req.file.path,options);
                if(result){
                    pubid=result.public_id;
                    secureurl=result.secure_url;
                    
                    fs.rm(`uploads/${req.file.filename}`);
                    res.status(200).json({
                        success:true,
                        message:"servey scetch uploaded",
                        public_id:pubid,
                        secure_url:secureurl
                    })
                }
                else{
                    return res.status(500).json({
                        success:false,
                        message:"No cloudinary result"
                    })
                }
    
            }
        else{
            return res.status(500).json({
                success:false,
                message:"no file uploaded"
            })


        }
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const uploadchalan=async(req,res,next)=>{
    try{
        const {ph_no}=req.body;
        if(req.file){
                let pubid='';
                let secureurl='';
                const options = {
                    folder:`${ph_no}`,
                    use_filename: true,
                    unique_filename: false,
                    overwrite: false,
                  };
                const result=await cloudinary.v2.uploader.upload(req.file.path,options);
                if(result){
                    pubid=result.public_id;
                    secureurl=result.secure_url;
                    
                    fs.rm(`uploads/${req.file.filename}`);
                    res.status(200).json({
                        success:true,
                        message:"chalan",
                        public_id:pubid,
                        secure_url:secureurl
                    })
                }
                else{
                    return res.status(500).json({
                        success:false,
                        message:"No cloudinary result"
                    })
                }
    
            }
        else{
            return res.status(500).json({
                success:false,
                message:"no file uploaded"
            })


        }
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const submitform=async(req,res,next)=>{
    try{

        const {name,email,address,surveyNo,taluk,village,type,ph_no,pi1,pi2,pi3,pi4,su1,su2,su3,su4,reasonRejection}=req.body;
        const addr=address
        const sur_num=surveyNo;
        const form_type=type;
        if(!name|| !email||!addr||!sur_num||!taluk||!village||!form_type||!ph_no||!pi1||!su1||!pi2||!su2||!pi3||!su3||!pi4||!su4){
            return res.status(500).json({
                success:false,
                message:"fill all fields"
            })
        }
        const status="null";
        const pool=await sql.connect(config);
        const form_id=new Date().toLocaleString();
        
        const data=pool.request().query(`insert into form_tb values('${ph_no}','${name}','${addr}','${sur_num}','${taluk}','${village}','${form_type}','${pi1}','${su1}','${pi2}','${su2}','${pi3}','${su3}','${pi4}','${su4}','${email}','${form_id}','${status}','null','${reasonRejection}','null')`);
        data.then(async(res1)=>{
            if(res1){
                
                return res.status(200).json({
                    success:true,
                    message:"user form submitted successfully"
                })
            }
            else{
                

                return res.status(500).json({
                    success:false,
                    message:"not submitted"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
//user forms returned
const getallformsnull=async(req,res,next)=>{
    try{

        const {ph_no}=req.body;
        
        if(!ph_no){
            return res.status(500).json({
                success:false,
                message:"send phone number"
            })
        }
        
        const pool=await sql.connect(config);
        
        
        const data=pool.request().query(`select * from form_tb where ph_no='${ph_no}'`);
        data.then(async(res1)=>{
            if(res1){
                
                return res.status(200).json({
                    success:true,
                    message:"all unattended forms returned",
                    forms:res1.recordset
                })
            }
            else{
                

                return res.status(500).json({
                    success:false,
                    message:"error in getting all forms"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const getallformsacc=async(req,res,next)=>{
    try{

        const {ph_no}=req.body;
        
        if(!ph_no){
            res.status(500).json({
                success:false,
                message:"send phone number"
            })
        }
        
        const pool=await sql.connect(config);
        
        
        const data=pool.request().query(`select * from form_tb where ph_no='${ph_no}' and status='accepted'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"all accepted forms returned",
                    forms:res1.recordset
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in getting all accepted forms"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const getallformsrej=async(req,res,next)=>{
    try{

        const {ph_no}=req.body;
        
        if(!ph_no){
            res.status(500).json({
                success:false,
                message:"send phone number"
            })
        }
        
        const pool=await sql.connect(config);
        
        
        const data=pool.request().query(`select * from form_tb where ph_no='${ph_no}' and status='rejected'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"all rejected forms returned",
                    forms:res1.recordset
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in getting all rejected forms"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};


//admin side forms returned
const agetallformsnull=async(req,res,next)=>{
    try{
        const pool=await sql.connect(config);
        const data=pool.request().query(`select * from form_tb where form_type='Residential Conversion'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"all unattended forms returned",
                    forms:res1.recordset
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in getting all forms"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const agetallformsacc=async(req,res,next)=>{
    try{
        const pool=await sql.connect(config);
        const data=pool.request().query(`select * from form_tb where form_type='Residential Construction'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"all  forms returned",
                    forms:res1.recordset
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in getting forms"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const agetallformsrej=async(req,res,next)=>{
    try{
        const pool=await sql.connect(config);
        const data=pool.request().query(`select * from form_tb where form_type='Commercial Conversion'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"all forms returned",
                    forms:res1.recordset
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in getting all  forms"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const agetallformsrejSub=async(req,res,next)=>{
    try{
        const pool=await sql.connect(config);
        const data=pool.request().query(`select * from form_tb where form_type='Commercial/government Projects'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"all forms returned",
                    forms:res1.recordset
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in getting all  forms"
                })
            };
         }
         )


        
    }
    catch(error){
        return next(new AppError(error,400));
    }

};

//accepting and rejection
const acceptForm=async(req,res,next)=>{
    try{
        const {form_id,ph_no}=req.body;
        let pubid='';
        let secureurl='';

        if(req.file){
            
            const options = {
                folder:`${ph_no}`,
                use_filename: true,
                unique_filename: false,
                overwrite: true,
              };
            
            const result=await cloudinary.v2.uploader.upload(req.file.path,options);
            if(result){
                pubid=result.public_id;
                secureurl=result.secure_url;
                fs.rm(`uploads/${req.file.filename}`);
                console.log('uploaded clearance form');
                
            }
            else{
                res.status(500).json({
                    success:false,
                    message:"No cloudinary result"
                })
            }

        }
    else{
        res.status(500).json({
            success:false,
            message:"no file uploaded"
        })


    }

        if(pubid != '' && secureurl !=''){
        const pool=await sql.connect(config);
        const data=pool.request().query(`update form_tb set status='accepted',clearance='${secureurl}',clearancepi='${pubid}' where form_id='${form_id}'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"accepted the form",
                    
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in accepting"
                })
            };
         }
         )


        }
        else{
            res.status(500).json({
                success:false,
                message:"error in uploading"
            })
        }
    }
    catch(error){
        return next(new AppError(error,400));
    }

};
const rejectForm=async(req,res,next)=>{
    try{
        const {form_id,rejMessage}=req.body;
        

    

      
        const pool=await sql.connect(config);
        const data=pool.request().query(`update form_tb set status='rejected',reasonRejection='${rejMessage}' where form_id='${form_id}'`);
        data.then(async(res1)=>{
            if(res1){
                
                res.status(200).json({
                    success:true,
                    message:"rejected the form",
                    
                })
            }
            else{
                

                res.status(500).json({
                    success:false,
                    message:"error in rejecting"
                })
            };
         }
         )
    }
    catch(error){
        return next(new AppError(error,400));
    }

};




export {uploadform1,uploadRTC,uploadSS,uploadchalan,
    submitform,getallformsacc,getallformsnull,
    getallformsrej,agetallformsnull,agetallformsacc,agetallformsrej,agetallformsrejSub,
    acceptForm,rejectForm};