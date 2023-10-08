    var arrLang = {
      'en': {
		'wiki': 'Wiki',
        'about': 'Information',
		'projects': 'Projects',
		'gallery': 'Gallery',
		'news': 'News',
		'links': 'Links',
		'mod': 'Mod',
		'tba': 'TBA',
		'supported': 'Supported',
		'frozen': 'Frozen',
		'closed': 'Closed',
		'development': 'Development',
		'more': 'More',
		'aboutme1': 'About me',
		'aboutme2': "Hi, my name is MomentariyModder, or as my friends and acquaintances often call me, Modder. I'm 18 years old, and I'm from Belarus (a small country in Europe, bordering Russia and Ukraine). I also like to create almost any content for Minecraft, i.e.: mods, maps, resource packs, servers.",
        'partners': 'Partners',
		'partners_info': 'With regard to the partnership, write to the Discord personal account (@MomentariyModder).',
		'donating': 'Support me by donating',
		'license': 'License',
		'license_lang': '🇬🇧 English',
		'lic1': 'All rights reserved by MomentariyModder.',
		'lic2': 'No one has the right to create a port, remake, sequel, backport and fork of my project, except for addons.',
		'lic3': 'Also, no one has the right to distribute my project on third-party resources without my permission.',
		'lic4': 'And this project is not an official product of Minecraft and Mojang Studios.',
		'video': 'Video',
		'screenshot': 'Screenshot',
		'footer1': 'All Rights Reserved.',
		'footer2': 'is not affiliated with Mojang Studios, nor are its projects official Minecraft projects.',
	  },
	  'ru': {
		'wiki': 'Вики',
        'about': 'Информация',
		'projects': 'Проекты',
		'gallery': 'Галерея',
		'news': 'Новости',
		'links': 'Ссылки',
		'mod': 'Мод',
		'tba': 'TBA',
		'supported': 'Поддерживается',
		'frozen': 'Заморожен',
		'closed': 'Закрыт',
		'development': 'В разработке',
		'more': 'Больше',
		'aboutme1': 'Обо мне',
		'aboutme2': "Привет, меня зовут MomentariyModder, или, как часто называют меня друзья и знакомые, Моддер. Мне 18 лет, и я из Беларуси (небольшая страна в Европе, граничащая с Россией и Украиной). Также мне нравится создавать практически любой контент для Minecraft: моды, карты, ресурс-паки, серверы.", 
        'partners': 'Партнеры',
		'partners_info': 'По вопросам партнерства пишите в личный сообщение Discord (@MomentariyModder).',
		'donating': 'Поддержите меня донатикам',
		'license': 'Лицензия',
		'license_lang': '🇷🇺 Русский',
		'lic1': 'Все права защищены MomentariyModder.',
		'lic2': 'Никто не имеет права создавать порт, ремейк, продолжение, бэкпорт и форк моего проекта, за исключением аддонов.',
		'lic3': 'Также никто не имеет права распространять мой проект на сторонних ресурсах без моего разрешение.',
		'lic4': 'И еще данный проект не является официальным продуктом Minecraft и Mojang Studios.',
		'video': 'Видео',
		'screenshot': 'Скриншот',
		'footer1': 'Все права защищены.',
		'footer2': 'не связана с Mojang Studios и не является официальным проектом Minecraft.',
	  }
    };

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });