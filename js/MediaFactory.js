class MediaFactory {

    init(data) 
    {
        if (data.image) {
            
            return new Image(data)
        }
        
        return new Video(data)
    }

}