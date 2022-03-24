let style=`
  <style>
  .lw-overlay {
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
  }.lw-overlay:target {
    visibility: visible;
    opacity: 1;
  }.lw-popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 2s ease-in-out;
  }.lw-popup .content {
    max-height: 30%;
    overflow: auto;
  }
  </style>
`
let warning=`
  <div id="popup" class="lw-overlay">
    <div class="lw-popup">
      <h2>Внимание!</h2>
      <div class="lw-content">
        <p>
          На проекте введутся тех. работы.
          <br><br>
          В связи с этим сайт был отключен.
          <br><br>
          Больще информации: https://discord.com/invite/x5uHZ5CEtE
          <br><br>>
          - Администрация ИМПЕРИЯ ВОРИНВУД
        </p>
      </div>
    </div>
  </div>
`
if(window.tosAgreed!==true){$("head").prepend(style)
$("body").append(warning)}