"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _fromPairs = _interopRequireDefault(require("lodash/fromPairs"));

var _fileImage = _interopRequireDefault(require("react-icons2/mdi/file-image"));

var _fileDocument = _interopRequireDefault(require("react-icons2/mdi/file-document"));

var _fileWord = _interopRequireDefault(require("react-icons2/mdi/file-word"));

var _fileExcel = _interopRequireDefault(require("react-icons2/mdi/file-excel"));

var _filePdf = _interopRequireDefault(require("react-icons2/mdi/file-pdf"));

var _fileMusic = _interopRequireDefault(require("react-icons2/mdi/file-music"));

var _fileVideo = _interopRequireDefault(require("react-icons2/mdi/file-video"));

var _filePowerpoint = _interopRequireDefault(require("react-icons2/mdi/file-powerpoint"));

var _file = _interopRequireDefault(require("react-icons2/mdi/file"));

function assign(arr, type) {
  var prepare = arr.map(function (e) {
    return [e, type];
  });
  return (0, _fromPairs.default)(prepare);
}

var imageTypes = ['jpg', 'jpeg', 'exif', 'bmp', 'png', 'gif', 'tiff', 'webp', 'heif'];
var docTypes = ['txt', 'rtf', 'csv'];
var wordTypes = ['doc', 'docx', 'odt'];
var tableTypes = ['xls', 'xlsx', 'ods'];
var pdfTypes = ['pdf', 'djvu', 'djv'];
var presentationTypes = ['ppt', 'pptx', 'djv', 'odp'];
var musicTypes = ['aac', 'alac', 'ac3', 'aiff', 'dts', 'flac', 'mp3', 'ogg', 'opus', 'wma', 'wav', 'raw', 'dxd', 'dsd', 'speex', 'mp2', 'm4a', 'swa', 'm3u', 'm3u8', 'xspf', 'pls', 'asx', 'aimppls', 'plc', 'wpl'];
var videoTypes = ['webm', 'mkv', 'flv', 'vob', 'ogv', 'drc', 'gifv', 'mng', 'avi', 'mts', 'm2ts', 'mov', 'qt', 'wmv', 'yuv', 'rm', 'rmvb', 'asf', 'amv', 'mp4', 'm4p', 'm4v', 'mpg', 'mpeg', 'mpe', 'mpv', 'm2v', 'm4v', 'svi', '3gp', '3g2', 'mxf', 'roq', 'nsv', 'f4v', 'f4p', 'f4a', 'f4b'];

var _default = (0, _objectSpread2.default)({}, assign(imageTypes, _fileImage.default), assign(docTypes, _fileDocument.default), assign(wordTypes, _fileWord.default), assign(tableTypes, _fileExcel.default), assign(pdfTypes, _filePdf.default), assign(presentationTypes, _filePowerpoint.default), assign(musicTypes, _fileMusic.default), assign(videoTypes, _fileVideo.default), {
  other: _file.default
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlVHlwZXMuanMiXSwibmFtZXMiOlsiYXNzaWduIiwiYXJyIiwidHlwZSIsInByZXBhcmUiLCJtYXAiLCJlIiwiaW1hZ2VUeXBlcyIsImRvY1R5cGVzIiwid29yZFR5cGVzIiwidGFibGVUeXBlcyIsInBkZlR5cGVzIiwicHJlc2VudGF0aW9uVHlwZXMiLCJtdXNpY1R5cGVzIiwidmlkZW9UeXBlcyIsIkltYWdlIiwiRG9jIiwiV29yZCIsIlRhYmxlIiwiUGRmIiwiUHJlc2VudGF0aW9uIiwiTXVzaWMiLCJWaWRlbyIsIm90aGVyIiwiRmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDekIsTUFBTUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLEdBQUosQ0FBUSxVQUFBQyxDQUFDO0FBQUEsV0FBSyxDQUFDQSxDQUFELEVBQUlILElBQUosQ0FBTDtBQUFBLEdBQVQsQ0FBaEI7QUFDQSxTQUFPLHdCQUFVQyxPQUFWLENBQVA7QUFDRDs7QUFFRCxJQUFNRyxVQUFVLEdBQUcsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUErQixLQUEvQixFQUFzQyxLQUF0QyxFQUE2QyxNQUE3QyxFQUFxRCxNQUFyRCxFQUE2RCxNQUE3RCxDQUFuQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEIsQ0FBbkI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixLQUFoQixDQUFqQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEIsRUFBdUIsS0FBdkIsQ0FBMUI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsS0FEaUIsRUFDVixNQURVLEVBQ0YsS0FERSxFQUNLLE1BREwsRUFDYSxLQURiLEVBQ29CLE1BRHBCLEVBQzRCLEtBRDVCLEVBQ21DLEtBRG5DLEVBQzBDLE1BRDFDLEVBQ2tELEtBRGxELEVBRWpCLEtBRmlCLEVBRVYsS0FGVSxFQUVILEtBRkcsRUFFSSxLQUZKLEVBRVcsT0FGWCxFQUVvQixLQUZwQixFQUUyQixLQUYzQixFQUVrQyxLQUZsQyxFQUV5QyxLQUZ6QyxFQUVnRCxNQUZoRCxFQUdqQixNQUhpQixFQUdULEtBSFMsRUFHRixLQUhFLEVBR0ssU0FITCxFQUdnQixLQUhoQixFQUd1QixLQUh2QixDQUFuQjtBQUtBLElBQU1DLFVBQVUsR0FBRyxDQUNqQixNQURpQixFQUNULEtBRFMsRUFDRixLQURFLEVBQ0ssS0FETCxFQUNZLEtBRFosRUFDbUIsS0FEbkIsRUFDMEIsTUFEMUIsRUFDa0MsS0FEbEMsRUFDeUMsS0FEekMsRUFDZ0QsS0FEaEQsRUFDdUQsTUFEdkQsRUFFakIsS0FGaUIsRUFFVixJQUZVLEVBRUosS0FGSSxFQUVHLEtBRkgsRUFFVSxJQUZWLEVBRWdCLE1BRmhCLEVBRXdCLEtBRnhCLEVBRStCLEtBRi9CLEVBRXNDLEtBRnRDLEVBRTZDLEtBRjdDLEVBRW9ELEtBRnBELEVBR2pCLEtBSGlCLEVBR1YsTUFIVSxFQUdGLEtBSEUsRUFHSyxLQUhMLEVBR1ksS0FIWixFQUdtQixLQUhuQixFQUcwQixLQUgxQixFQUdpQyxLQUhqQyxFQUd3QyxLQUh4QyxFQUcrQyxLQUgvQyxFQUdzRCxLQUh0RCxFQUlqQixLQUppQixFQUlWLEtBSlUsRUFJSCxLQUpHLEVBSUksS0FKSixFQUlXLEtBSlgsQ0FBbkI7OytDQVFLYixNQUFNLENBQUNNLFVBQUQsRUFBYVEsa0JBQWIsQyxFQUNOZCxNQUFNLENBQUNPLFFBQUQsRUFBV1EscUJBQVgsQyxFQUNOZixNQUFNLENBQUNRLFNBQUQsRUFBWVEsaUJBQVosQyxFQUNOaEIsTUFBTSxDQUFDUyxVQUFELEVBQWFRLGtCQUFiLEMsRUFDTmpCLE1BQU0sQ0FBQ1UsUUFBRCxFQUFXUSxnQkFBWCxDLEVBQ05sQixNQUFNLENBQUNXLGlCQUFELEVBQW9CUSx1QkFBcEIsQyxFQUNObkIsTUFBTSxDQUFDWSxVQUFELEVBQWFRLGtCQUFiLEMsRUFDTnBCLE1BQU0sQ0FBQ2EsVUFBRCxFQUFhUSxrQkFBYixDO0FBQ1RDLEVBQUFBLEtBQUssRUFBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbVBhaXJzIGZyb20gJ2xvZGFzaC9mcm9tUGFpcnMnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtaWNvbnMyL21kaS9maWxlLWltYWdlJztcbmltcG9ydCBEb2MgZnJvbSAncmVhY3QtaWNvbnMyL21kaS9maWxlLWRvY3VtZW50JztcbmltcG9ydCBXb3JkIGZyb20gJ3JlYWN0LWljb25zMi9tZGkvZmlsZS13b3JkJztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1pY29uczIvbWRpL2ZpbGUtZXhjZWwnO1xuaW1wb3J0IFBkZiBmcm9tICdyZWFjdC1pY29uczIvbWRpL2ZpbGUtcGRmJztcbmltcG9ydCBNdXNpYyBmcm9tICdyZWFjdC1pY29uczIvbWRpL2ZpbGUtbXVzaWMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJ3JlYWN0LWljb25zMi9tZGkvZmlsZS12aWRlbyc7XG5pbXBvcnQgUHJlc2VudGF0aW9uIGZyb20gJ3JlYWN0LWljb25zMi9tZGkvZmlsZS1wb3dlcnBvaW50JztcbmltcG9ydCBGaWxlIGZyb20gJ3JlYWN0LWljb25zMi9tZGkvZmlsZSc7XG5cbmZ1bmN0aW9uIGFzc2lnbihhcnIsIHR5cGUpIHtcbiAgY29uc3QgcHJlcGFyZSA9IGFyci5tYXAoZSA9PiAoW2UsIHR5cGVdKSk7XG4gIHJldHVybiBmcm9tUGFpcnMocHJlcGFyZSk7XG59XG5cbmNvbnN0IGltYWdlVHlwZXMgPSBbJ2pwZycsICdqcGVnJywgJ2V4aWYnLCAnYm1wJywgJ3BuZycsICdnaWYnLCAndGlmZicsICd3ZWJwJywgJ2hlaWYnXTtcbmNvbnN0IGRvY1R5cGVzID0gWyd0eHQnLCAncnRmJywgJ2NzdiddO1xuY29uc3Qgd29yZFR5cGVzID0gWydkb2MnLCAnZG9jeCcsICdvZHQnXTtcbmNvbnN0IHRhYmxlVHlwZXMgPSBbJ3hscycsICd4bHN4JywgJ29kcyddO1xuY29uc3QgcGRmVHlwZXMgPSBbJ3BkZicsICdkanZ1JywgJ2RqdiddO1xuY29uc3QgcHJlc2VudGF0aW9uVHlwZXMgPSBbJ3BwdCcsICdwcHR4JywgJ2RqdicsICdvZHAnXTtcbmNvbnN0IG11c2ljVHlwZXMgPSBbXG4gICdhYWMnLCAnYWxhYycsICdhYzMnLCAnYWlmZicsICdkdHMnLCAnZmxhYycsICdtcDMnLCAnb2dnJywgJ29wdXMnLCAnd21hJyxcbiAgJ3dhdicsICdyYXcnLCAnZHhkJywgJ2RzZCcsICdzcGVleCcsICdtcDInLCAnbTRhJywgJ3N3YScsICdtM3UnLCAnbTN1OCcsXG4gICd4c3BmJywgJ3BscycsICdhc3gnLCAnYWltcHBscycsICdwbGMnLCAnd3BsJyxcbl07XG5jb25zdCB2aWRlb1R5cGVzID0gW1xuICAnd2VibScsICdta3YnLCAnZmx2JywgJ3ZvYicsICdvZ3YnLCAnZHJjJywgJ2dpZnYnLCAnbW5nJywgJ2F2aScsICdtdHMnLCAnbTJ0cycsXG4gICdtb3YnLCAncXQnLCAnd212JywgJ3l1dicsICdybScsICdybXZiJywgJ2FzZicsICdhbXYnLCAnbXA0JywgJ200cCcsICdtNHYnLFxuICAnbXBnJywgJ21wZWcnLCAnbXBlJywgJ21wdicsICdtMnYnLCAnbTR2JywgJ3N2aScsICczZ3AnLCAnM2cyJywgJ214ZicsICdyb3EnLFxuICAnbnN2JywgJ2Y0dicsICdmNHAnLCAnZjRhJywgJ2Y0YicsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLmFzc2lnbihpbWFnZVR5cGVzLCBJbWFnZSksXG4gIC4uLmFzc2lnbihkb2NUeXBlcywgRG9jKSxcbiAgLi4uYXNzaWduKHdvcmRUeXBlcywgV29yZCksXG4gIC4uLmFzc2lnbih0YWJsZVR5cGVzLCBUYWJsZSksXG4gIC4uLmFzc2lnbihwZGZUeXBlcywgUGRmKSxcbiAgLi4uYXNzaWduKHByZXNlbnRhdGlvblR5cGVzLCBQcmVzZW50YXRpb24pLFxuICAuLi5hc3NpZ24obXVzaWNUeXBlcywgTXVzaWMpLFxuICAuLi5hc3NpZ24odmlkZW9UeXBlcywgVmlkZW8pLFxuICBvdGhlcjogRmlsZSxcbn07XG4iXX0=