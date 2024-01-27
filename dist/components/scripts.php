<script>
  const cssFileUrl = document.styleSheets[0].href;
  fetch(cssFileUrl).then((r) => r.text()).then((text) => console.log(text))
</script>