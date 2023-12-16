// IE用のスクリプトを読み込む
if (!Array.prototype.includes) {
  const scriptTag = document.createElement('script');
  scriptTag.src =
    window.ongekiRelativePath + '/assets/js/plugins/picturefill.js';
  document.head.appendChild(scriptTag);
}
