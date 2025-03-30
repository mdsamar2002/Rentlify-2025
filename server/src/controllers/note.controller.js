const createNotes = async (req,res) => {
     try {
        const {title,description} = req.body
        const notes = {
            title : title,
            description : description
        }
       const saveNotes = await notes.save()
       return res.status(201).json({
        message : "notes created successfully",
        sucess : true
       })
    } catch (error) {
        console.log(error,'error at notes creation')
    }
}

export {createNotes}
