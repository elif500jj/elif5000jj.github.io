const translations = {
  ru: {
    title: "Сайт Элиф",
    welcome: "Добро пожаловать на мой сайт!",
    about_title: "Обо мне",
    about_text: "Меня зовут Элиф. Я создаю сайты, которые удобно смотреть на телефоне и компьютере. Если вы хотите простой и красивый сайт — напишите мне!",
    portfolio_title: "Портфолио",
    portfolio_text: "Здесь вы можете посмотреть мои работы. Я делаю сайты для бизнеса, магазинов и личных проектов.",
    contact_title: "Связаться со мной",
    telegram: "Написать в Telegram",
    about_more: "Сейчас я развиваю свои навыки в HTML, CSS и JavaScript, а также помогаю людям запускать свои первые сайты.",
    back: "← Назад на главную"

  },
  en: {
    title: "Elif's Website",
    welcome: "Welcome to my website!",
    about_title: "About Me",
    about_text: "My name is Elif. I create websites that look good on phones and computers. If you want a simple and beautiful site — message me!",
    portfolio_title: "Portfolio",
    portfolio_text: "Here you can see my work. I build websites for businesses, shops, and personal projects.",
    contact_title: "Contact Me",
    telegram: "Message me on Telegram",
        about_more: "I am currently developing my skills in HTML, CSS, and JavaScript, and helping people launch their first websites.",
    back: "← Back to main"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}
