
const formData = async (req,res)=>
    {
        try{
            const data = req.body;
            console.log("form data recieved");
            console.log(data);
            return data;
        }catch(err)
        {
            res.json(err);
            console.log(err,"error getting form data");
        }
    }

    export default formData;