/*
  브라우저 기본 alert()는 CSS로 꾸밀 수 없기 때문에,
  <dialog>로 만든 팝업으로 window.alert를 대체합니다.
  기존 코드의 alert("...") 호출은 그대로 사용하면 됩니다.
*/
(() => {
  const queue = [];
  let dialog = null;

  const createDialog = () => {
    dialog = document.createElement("dialog");
    dialog.className = "winter-alert";
    dialog.innerHTML = `
      <p class="winter-alert__label">Notice</p>
      <p class="winter-alert__message"></p>
      <button type="button" class="winter-alert__button">확인</button>
    `;
    document.body.appendChild(dialog);

    dialog
      .querySelector(".winter-alert__button")
      .addEventListener("click", () => dialog.close());

    // 닫히면 대기 중인 다음 메시지를 보여줌
    dialog.addEventListener("close", () => {
      if (queue.length) show(queue.shift());
    });
  };

  const show = (message) => {
    dialog.querySelector(".winter-alert__message").textContent = message;
    dialog.showModal();
    dialog.querySelector(".winter-alert__button").focus();
  };

  window.alert = (message = "") => {
    if (!dialog) createDialog();
    if (dialog.open) {
      queue.push(String(message));
    } else {
      show(String(message));
    }
  };
})();
