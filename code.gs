/* Code written by @nn1k1kvn 
   https://github.com/nn1k1kvn/DriveGo2ImgGallery
*/




var folderName  = "test";

var listfiles = {
    files: []
};



listFilesInFolder(folderName);
// doGet(listfiles);
 

function listFilesInFolder(folderName) {


// search folders
 var folders = DriveApp.searchFolders('title contains "' + folderName + '"');
 while (folders.hasNext()) {
   var folder = folders.next();
   // Logger.log(folder.getName());
   var files = folder.searchFiles('mimeType contains "image/"'); 
   while (files.hasNext()) {
     var file = files.next();
      
      // A short-lived link to the file's thumbnail. 
      // To use the function, you’ll need to enable the Drive API from the Google Developers Console for your Apps Script project.
      // var thumbnailLink = Drive.Files.get(file.getId()).thumbnailLink;    
     
       


      listfiles.files.push({
      //  "fileName" : file.getName(),
      // "fileUrl" : file.getUrl(),
      // "thumbnailLink" :  thumbnailLink,
       
        "fileId" : file.getId(),
         
        
      
       
     });
    }
 }
   
  
};


function doGet(request) {
  

  
   return ContentService.createTextOutput(
     
     '$.each(' + JSON.stringify(listfiles) + '.files, function( i, file ) { $( "<a data-gallery id=" + file.fileId + " width=25% height=25% >" ).attr( "href", "https://docs.google.com/uc?export=download&confirm=no_antivirus&id=" + file.fileId).appendTo( "#links" ); $( "<img width=25% height=25%>" ).attr( "src", "https://docs.google.com/uc?export=download&confirm=no_antivirus&id=" + file.fileId).appendTo( "#"+file.fileId ); if ( i === 3 ) { return false;}});'
   
   )
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
  
  
  
}






/*
 $.each( filelist.files, function( i, file ) {
       
        $( "<a data-gallery >" ).attr( "href", "https://docs.google.com/uc?export=download&confirm=no_antivirus&id=" + file.fileId).appendTo( "#links" );
        $( "<img>" ).attr( "src", "https://docs.google.com/uc?export=download&confirm=no_antivirus&id=" + file.fileId).appendTo( "#images a" );
        
        if ( i === 3 ) {
          return false;
        }
        
        */
 
