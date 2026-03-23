const asyncHandle=(requesthandle)=>{
return (req,res,next)=>{
    Promise.resolve(requesthandle(req,res,next))
    .catch((error)=> next(error))
}
}

export {asyncHandle};