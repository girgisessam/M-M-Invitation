// Paste this into Google Apps Script (Extensions > Apps Script) inside your Google Sheet.
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var name = String(d.name || '').trim().slice(0, 100);
    var message = String(d.message || '').trim().slice(0, 2000);
    if (!name || !message) return out({ ok: false });
    var safe = function (s) { return /^[=+\-@]/.test(s) ? "'" + s : s; }; // block spreadsheet formulas
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(['Time', 'Name', 'Attending', 'Message']);
    sheet.appendRow([new Date(), safe(name), d.attending === 'no' ? 'No' : 'Yes', safe(message)]);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false });
  } finally {
    lock.releaseLock();
  }
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
