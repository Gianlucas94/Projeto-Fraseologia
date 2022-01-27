export default {
  focusFirst(element) {
    if (element) {
      element = document.querySelector(element);
    } else {
      element = document.querySelector(
        '.main .uk-input, .main .uk-textarea, .main .uk-select, .main input[type="radio"], .main input[type="checkbox"], .main .uk-button'
      );
    }
    element.focus();

    if (
      element.getAttribute('type') === 'radio' ||
      element.getAttribute('type') === 'checkbox'
    ) {
      element.checked = true;
    }
  },
  selectFirst(element) {
    if (element) {
      element = document.querySelector(element);
    } else {
      element = document.querySelector(
        '.main .uk-input, .main .uk-textarea, .main .uk-select, .main input[type="radio"], .main input[type="checkbox"], .main .uk-button'
      );
    }
    element.select();
  },
  selectForm() {
    const elements = document.querySelectorAll(
      '.uk-input, .uk-textarea, .vdpComponent.vdpWithInput > input'
    );
    elements.forEach(element => {
      element.addEventListener('focus', e => {
        e.currentTarget.select();
      });
    });
  },
  onPasteFocusNext() {
    const elements = document.querySelectorAll(
      '.main .uk-grid .uk-input, .main .uk-grid .uk-textarea'
    );
    elements.forEach((element, index) => {
      element.addEventListener('paste', () => {
        setTimeout(() => {
          elements[index + 1].focus();
        }, 0);
      });
    });
  },
  today() {
    let date = new Date();
    let day = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = String(date.getFullYear());

    day = day.length === 1 ? '0' + day : day;
    month = month.length === 1 ? '0' + month : month;

    return `${year}-${month}-${day}`;
  },
  todayHtml(date) {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return `${day}/${month}/${year}`;
  },
  now() {
    let time = new Date();
    let hours = String(time.getHours());
    let minutes = String(time.getMinutes());

    hours = hours.length === 1 ? '0' + hours : hours;
    minutes = minutes.length === 1 ? '0' + minutes : minutes;

    return `${hours}:${minutes}`;
  },
  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
