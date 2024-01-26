/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Form file upload Js File
*/

// Dropzone

var dropzonePreviewNode1 = document.querySelector("#dropzone-preview-list1");
dropzonePreviewNode1.id = "";
if (dropzonePreviewNode1) {
    var previewTemplate1 = dropzonePreviewNode1.parentNode.innerHTML;
    dropzonePreviewNode1.parentNode.removeChild(dropzonePreviewNode1);
    var dropzone1 = new Dropzone("#dropzone1", {
        url: 'https://httpbin.org/post',
        method: "post",
        previewTemplate: previewTemplate1,
        previewsContainer: "#dropzone-preview1",
    });
}

var dropzonePreviewNode2 = document.querySelector("#dropzone-preview-list2");
dropzonePreviewNode2.id = "";
if (dropzonePreviewNode2) {
    var previewTemplate2 = dropzonePreviewNode2.parentNode.innerHTML;
    dropzonePreviewNode2.parentNode.removeChild(dropzonePreviewNode2);
    var dropzone2 = new Dropzone("#dropzone2", {
        url: 'https://httpbin.org/post',
        method: "post",
        previewTemplate: previewTemplate2,
        previewsContainer: "#dropzone-preview2",
    });
}

var dropzonePreviewNode = document.querySelector("#dropzone-preview-list");
dropzonePreviewNode.id = "";
if (dropzonePreviewNode) {
    var previewTemplate = dropzonePreviewNode.parentNode.innerHTML;
    dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode);
    var dropzone = new Dropzone(".dropzone", {
        url: 'https://httpbin.org/post',
        method: "post",
        previewTemplate: previewTemplate,
        previewsContainer: "#dropzone-preview",
    });
}