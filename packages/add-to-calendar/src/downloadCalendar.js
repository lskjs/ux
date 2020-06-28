import isMobileBrowser from '@lskjs/utils/isMobileBrowser';
import isCrappyIEBrowser from '@lskjs/utils/isCrappyIEBrowser';

const isIcsUrl = (url) => url.startsWith('data') || url.startsWith('BEGIN');
const isBlobDownload = (url) => !isMobileBrowser() && isIcsUrl(url);

export default (url) => {
  if (!isBlobDownload()) {
    window.open(url, '_blank');
    return;
  }
  const filename = 'download.ics';
  const blob = new Blob([url], { type: 'text/calendar;charset=utf-8' });

  if (isCrappyIEBrowser()) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    /** **************************************************************
     // many browsers do not properly support downloading data URIs
      // (even with "download" attribute in use) so this solution
      // ensures the event will download cross-browser
      *************************************************************** */
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
