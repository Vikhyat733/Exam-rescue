// ===== EXAM RESCUE — API KEY AUTO-CONFIG =====
// Pre-loads API keys into localStorage so AI features work out of the box.
(function () {
    const existing = localStorage.getItem('er_apikeys');
    if (!existing || existing === '{}' || existing === 'null') {
        localStorage.setItem('er_apikeys', JSON.stringify({
            gemini: 'AIzaSyCXI-ExIzrAEdBmacXgzZpITOVSpQOVak8',
            openai: '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'
        }));
    }
})();
