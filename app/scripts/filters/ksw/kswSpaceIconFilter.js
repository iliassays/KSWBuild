"use strict";
(function () {
    angular.module("kswFilterModule")
        .filter("kswSpaceIconFilter", ["ApiService",
            function (ApiService) {
                return function (input) {
                    switch (input.entityType) {
                        case 'Space':
                        {
                            return 'images/space/Space.png';
                        }
                            break;
                        case 'Text':
                        {
                            return 'images/space/doc_icon.png';
                        }
                            break;
                        case 'Uploaded':
                        {
                            switch (input.fileExtension){
                                case '.docx':
                                    return 'images/space/doc_icon_doc_big.png';
                                break;
                                case '.pdf':
                                    return 'images/space/PdfLogo.png'
                                break;
                                default :
                                    return 'images/space/TextFileLogo.png'
                            }
                        }
                            break;
                        case 'WebLink':
                        {
                            return input.imgSrc;
                        }
                            break;
                    }
                }
            }]);
})();