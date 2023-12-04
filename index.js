const { Telegraf } = require('telegraf')
require('dotenv').config()
const { Markup } = require('telegraf');
const text = require ('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Приветствую!'))
bot.help((ctx) => ctx.reply('Помощь'))

bot.command('hot_drinks', async (ctx)=> {
    try {
     await ctx.replyWithHTML('<b>ГОРЯЧИЕ НАПИТКИ</b>', Markup.inlineKeyboard(
          [
               [Markup.button.callback('Эспрессо','btn_1'), Markup.button.callback('Американо','btn_2'), Markup.button.callback('Латте','btn_3')],
               [Markup.button.callback('Карамельный Маккиато','btn_4'), Markup.button.callback('Капучино','btn_5'), Markup.button.callback('FlatWhite','btn_6')],
              [Markup.button.callback('РАФ','btn_7'), Markup.button.callback('Кедровый капучино','btn_8'), Markup.button.callback('МАТЧА','btn_9')],
              [Markup.button.callback('Гляссе','btn_10'), Markup.button.callback('Чай с молоком','btn_11'), Markup.button.callback('ЧАй Лесная ягода','btn_12')],
              [Markup.button.callback('Какао/Горячий шоколад','btn_13'), Markup.button.callback('Какао на растительном','btn_14'), Markup.button.callback('ЧАй Малина','btn_15')],
              [Markup.button.callback('Чай Имбирный','btn_16'), Markup.button.callback('Чай Цитрусовый','btn_17'), Markup.button.callback('ЧАй МАНГО/Лайм','btn_18')],
              [Markup.button.callback('Чай Облепиха с имбирём','btn_19'), Markup.button.callback('Глинтвейн вишня','btn_20')],
          ]
     ))
     } catch (e) {
          console.error(e)
     }
})

 bot.command('cold_drinks', async (ctx)=> {
     try {
      await ctx.replyWithHTML('<b>ХОЛОДНЫЕ НАПИТКИ</b>', Markup.inlineKeyboard(
           [
                [Markup.button.callback('АЙС Американо','btn_21'), Markup.button.callback('Айс Латте','btn_22'), Markup.button.callback('Айс Матча','btn_23')],
                [Markup.button.callback('Айс Раф','btn_24'), Markup.button.callback('Фрапучино Шоколадный','btn_25'), Markup.button.callback('Хорнет','btn_26')],
                [Markup.button.callback('Эспрессо-тоник','btn_27'), Markup.button.callback('Банан Крем Кофе','btn_28'), Markup.button.callback('Айс Какао','btn_29')],
                [Markup.button.callback('Сорбетто Клубника','btn_30'), Markup.button.callback('Сорбетто Ананас/манго/Вишня','btn_31'), Markup.button.callback('Крем-сода','btn_32')],
                [Markup.button.callback('Лимонад Классический','btn_33'), Markup.button.callback('ФризБриз','btn_34'), Markup.button.callback('Лимонады ягодные','btn_35')],
                [Markup.button.callback('Мохито','btn_36'), Markup.button.callback('Милк-шейки','btn_37'), Markup.button.callback('Смузи Сникерс/Орео','btn_38')],
                [Markup.button.callback('Смузи Ягодные','btn_39'), Markup.button.callback('Смузи на растительном','btn_40'), Markup.button.callback('Фрапучино Сникерс/Орео','btn_41')],
                [Markup.button.callback('Фрапучино Ваниль/Карамель/Фисташка','btn_42')],
           ]
      ))
      } catch (e) {
           console.error(e)
      }
 })

 bot.command('showcase', async (ctx)=> {
     try {
      await ctx.replyWithHTML('<b>Витрина</b>', Markup.inlineKeyboard(
           [
                [Markup.button.callback('Тарт Лимонный','btn_43'), Markup.button.callback('Анна Павлова','btn_44'), Markup.button.callback('Фундучное','btn_45'), Markup.button.callback('Тарт Лесные ягоды','btn_46')],
                [Markup.button.callback('Сникерс','btn_47'), Markup.button.callback('Тирамису','btn_48'), Markup.button.callback('Медовик','btn_49'), Markup.button.callback('Панна Котта','btn_50')],
                [Markup.button.callback('Манго/маракуйя','btn_51'), Markup.button.callback('Карамельно-ореховый','btn_52'), Markup.button.callback('Моти','btn_53'), Markup.button.callback('Макаронсы','btn_54')],
                [Markup.button.callback('Чиз Классика','btn_55'), Markup.button.callback('Чиз Карамель','btn_56'), Markup.button.callback('Чиз Черничный','btn_57'), Markup.button.callback('Ягодная мерри','btn_58')],
                [Markup.button.callback('Наполеон класс','btn_59'), Markup.button.callback('Наполеон шок','btn_60'), Markup.button.callback('Фисташковый','btn_61'), Markup.button.callback('Творожный','btn_62')],
                [Markup.button.callback('Картошка','btn_63'), Markup.button.callback('Лесная сказка','btn_64'), Markup.button.callback('Пряник','btn_65'), Markup.button.callback('Шок-мятное','btn_66')],
                [Markup.button.callback('Миндальное','btn_67'), Markup.button.callback('Овсяное','btn_68'), Markup.button.callback('Тройной шок','btn_69'), Markup.button.callback('Эклеры','btn_70')],
                [Markup.button.callback('Таллер','btn_71'), Markup.button.callback('Шок-арахис','btn_72'), Markup.button.callback('Миндальный чипс','btn_73'), Markup.button.callback('Сендвичи','btn_74')],
                [Markup.button.callback('Блины','btn_75'), Markup.button.callback('Сырники','btn_76'), Markup.button.callback('Кубете','btn_77'), Markup.button.callback('Шпинатный','btn_78')],
                [Markup.button.callback('Курица/грибы','btn_79'), Markup.button.callback('Салат Греческий','btn_80'), Markup.button.callback('Салат Цезарь','btn_81'), Markup.button.callback('Круассаны','btn_82')],
                [Markup.button.callback('Роллы','btn_83')],
           ]
      ))
      } catch (e) {
           console.error(e)
      }
 })

 bot.command('work', async (ctx) => {
     try {
            
         const workLink = 'https://docs.google.com/spreadsheets/d/1j1z_zuBIx6SycgdJT8f2NDMX14nsIt_TU8489MtiZmk/edit?usp=sharing';
         await ctx.replyWithHTML(`Чтобы узнать расписание, посетите <a href="${workLink}">эту ссылку</a>.`, {
             disable_web_page_preview: true
         });
 
     } catch (e) {
         console.error(e);
     }
 });


 bot.command('keywords', (ctx) => {
     const keywordList = [
         'книги',
         'амхара',
         'гуджи',
         'колумбия',
         'иргачиф',
         'габелла',
         'помогите',
         'помол',
         // Добавьте другие ключевые слова по мере необходимости
     ];
 
     const keywordString = keywordList.join(', '); // Преобразуем массив в строку через запятую
 
     ctx.reply(`Бот реагирует на следующие ключевые слова: ${keywordString}`);
 });

function addActionBot(name, src, text) {
     bot.action(name, async (ctx) => {
          try {
               await ctx.replyWithHTML(text, {
                    disable_web_page_preview: true
               })
               await ctx.answerCbQuery ()
               if (src !== false) {
                    await ctx.replyWithPhoto({
                         source: src
                    })
               }
          } catch (e) {
               console.error (e)
          }
     })
     
}

bot.on('text', (ctx) => {
     const messageText = ctx.message.text.toLowerCase(); // Приводим текст сообщения к нижнему регистру для удобства сравнения
 
     // Проверяем, содержится ли определенное ключевое слово в тексте
     if (messageText.includes('габелла')) {
         ctx.reply('Ни прибавить, ни отнять! Держитесь...');
     } else if (messageText.includes('помогите')) {
         ctx.reply('Не нужна тебе помощь! Ты и сам отлично справляешься!');
     }
     else if (messageText.includes('книги')) {
          const link = 'https://drive.google.com/drive/folders/1m-WA6rKeV22vGWhqs-ASIEBh5ls-gqcF?usp=drive_link'; // Ваша ссылка
        ctx.replyWithHTML(` <a href="${link}">«Ученье свет, а неученье – тьма»</a>.`);
      }
      else if (messageText.includes('амхара')) {
          const formattedText = `<b>Дескрипторы</b>: 
          <i>грейпфрут, темные ягоды, шоколад</i>;
          <b>Закладка кофе</b>: <i>17,4...18 грамм</i>;
          <b>Время пролива</b>: - <i>23...25 сек</i>;
          <b>Вес доппио</b>: — <i>32...36 грамм</i>;
          `;
        ctx.replyWithHTML(formattedText);
      }
      else if (messageText.includes('[колумбия')) {
          const formattedText = `<b>Дескрипторы</b>: 
          <i>вишня, красный апельсин, молочный шоколад</i>;
          <b>Закладка кофе</b>: <i>17,6...18 грамм</i>;
          <b>Время пролива</b>: - <i>26-28 сек</i>;
          <b>Вес доппио</b>: — <i>34...35 грамм</i>;
          `;
        ctx.replyWithHTML(formattedText);
      }
      else if (messageText.includes('гуджи')) {
          const formattedText = `<b>Дескрипторы</b>: 
          <i>лайм, бергамот, цветы, карамель</i>;
          <b>Закладка кофе</b>: <i>17,5...18 грамм</i>;
          <b>Время пролива</b>: - <i>23...28 сек</i>;
          <b>Вес доппио</b>: — <i>33...38 грамм</i>;
          `;
        ctx.replyWithHTML(formattedText);
      }
      else if (messageText.includes('иргачиф')) {
    const formattedText = `
        <b>Дескрипторы</b>: 
        <i>ежевика, брауни, шоколад</i>;
        <b>Закладка кофе</b>: <i>17,5...18 грамм</i>;
        <b>Время пролива</b>: - <i>25...28 сек</i>;
        <b>Вес доппио</b>: — <i>33...40 грамм</i>;
        У этого сорта <i>коэф.вываривания кофе</i> может может сильно меняться. Иногда лучший вкус это <b>17,5g/25 сек/40g выход</b>
    `;
    ctx.replyWithHTML(formattedText);
}
else if (messageText.includes('помол')) {
     const formattedText = `
     *Настройка помола (эспрессо):*
1. Берем холдер и очищаем его от остатков кофе и протираем насухо
2. Оттариваем холдер на весах
3. Смалываем двойную порцию кофе 17,3...18 грамм
   3.1. Если кофемолка выдает меньше дозировку, вручную домалываем
   3.2. Если больше, убираем излишки кофе в стаканчик
4. После того как в холдер засыпана нужная дозировка молотого кофе, разравниваем его так, чтобы трамбовка была ровной без наклонов в какую-либо сторону, для правильной экстракции кофе
5. Оттариваем посуду, в которую будем производить пролив (молочник, чашка, стакан)
6. Проливаем из группы воду 3-4 секунды для очистки группы от остатков прошлого приготовления и выравнивания температуры подачи воды
7. Вставляем холдер в группу и включаем пролив (кнопка Start) одновременно с запуском таймера
8. Внимательно следим за таймером, по истечении времени (исходя из рекомендаций по вашему сорту) — отключаем пролив
9. Ставим эспрессо на весы и проверяем вес, он должен составлять (смотри рекомендации к помолу)
   9.1. Если полученный вес больше, кофе обладает явным водянистым и/или кислотным вкусом, то, скорее всего, необходимо уменьшить степень помола
   9.2. Если вес меньше допустимого, то есть вероятность того, что ваш помол слишком мелкий, что в свою очередь даёт кофейной таблетке большее сопротивление и воде сложнее просочиться через неё. В данном случае нужно увеличить степень помола
10. Если вес находится в допустимом диапазоне, пробуем эспрессо на вкус и принимаем решение о дальнейшей настройке. Если всё равно что-то не то, наберите бар-менеджера он точно подскажет!
   `;
     ctx.replyWithHTML(formattedText);
 }
 });

 addActionBot ('btn_1', './img/hot/h1.jpg', text.text1)
 addActionBot ('btn_2', './img/hot/h2.jpg', text.text2)
 addActionBot ('btn_3', './img/hot/h3.jpg', text.text3)
 addActionBot ('btn_4', './img/hot/h4.jpg', text.text4)
 addActionBot ('btn_5', './img/hot/h5.jpg', text.text5)
 addActionBot ('btn_6', './img/hot/h6.jpg', text.text6)
 addActionBot ('btn_7', './img/hot/h7.jpg', text.text7)
 addActionBot ('btn_8', './img/hot/h8.jpg', text.text8)
 addActionBot ('btn_9', './img/hot/h9.jpg', text.text9)
 addActionBot ('btn_10', './img/hot/h10.jpg', text.text10)
 addActionBot ('btn_11', './img/hot/h11.jpg', text.text11)
 addActionBot ('btn_12', './img/hot/h12.jpg', text.text12)
 addActionBot ('btn_13', './img/hot/h13.jpg', text.text13)
 addActionBot ('btn_14', './img/hot/h14.jpg', text.text14)
 addActionBot ('btn_15', './img/hot/h15.jpg', text.text15)
 addActionBot ('btn_16', './img/hot/h16.jpg', text.text16)
 addActionBot ('btn_17', './img/hot/h17.jpg', text.text17)
 addActionBot ('btn_18', './img/hot/h18.jpg', text.text18)
 addActionBot ('btn_19', './img/hot/h19.jpg', text.text19)
 addActionBot ('btn_20', './img/hot/h20.jpg', text.text20)
 addActionBot ('btn_21', './img/cold/c1.jpg', text.text21)
 addActionBot ('btn_22', './img/cold/c2.jpg', text.text22)
 addActionBot ('btn_23', './img/cold/c3.jpg', text.text23)
 addActionBot ('btn_24', './img/cold/c4.jpg', text.text24)
 addActionBot ('btn_25', './img/cold/c5.jpg', text.text25)
 addActionBot ('btn_26', './img/cold/c6.jpg', text.text26)
 addActionBot ('btn_27', './img/cold/c7.jpg', text.text27)
 addActionBot ('btn_28', './img/cold/c8.jpg', text.text28)
 addActionBot ('btn_29', './img/cold/c9.jpg', text.text29)
 addActionBot ('btn_30', './img/cold/c10.jpg', text.text30)
 addActionBot ('btn_31', './img/cold/c11.jpg', text.text31)
 addActionBot ('btn_32', './img/cold/c12.jpg', text.text32)
 addActionBot ('btn_33', './img/cold/c13.jpg', text.text33)
 addActionBot ('btn_34', './img/cold/c14.jpg', text.text34)
 addActionBot ('btn_35', './img/cold/c15.jpg', text.text35)
 addActionBot ('btn_36', './img/cold/c16.jpg', text.text36)
 addActionBot ('btn_37', './img/cold/c17.jpg', text.text37)
 addActionBot ('btn_38', './img/cold/c18.jpg', text.text38)
 addActionBot ('btn_39', './img/cold/c19.jpg', text.text39)
 addActionBot ('btn_40', './img/cold/c20.jpg', text.text40)
 addActionBot ('btn_41', './img/cold/c21.jpg', text.text41)
 addActionBot ('btn_42', './img/cold/c22.jpg', text.text42)
 addActionBot ('btn_43', './img/showcase/tartlim.jpg', text.text43)
 addActionBot ('btn_44', './img/showcase/anna.jpg', text.text44)
 addActionBot ('btn_45', './img/showcase/hazelnut.jpg', text.text45)
 addActionBot ('btn_46', './img/showcase/tartmix.jpg', text.text46)
 addActionBot ('btn_47', './img/showcase/snikers.jpg', text.text47)
 addActionBot ('btn_48', './img/showcase/tiramisu.jpg', text.text48)
 addActionBot ('btn_49', './img/showcase/honey.jpg', text.text49)
 addActionBot ('btn_50', './img/showcase/pk.jpg', text.text50)
 addActionBot ('btn_51', './img/showcase/richmango.jpg', text.text51)
 addActionBot ('btn_52', './img/showcase/richcar.jpg', text.text52)
 addActionBot ('btn_53', './img/showcase/moti.jpg', text.text53)
 addActionBot ('btn_54', './img/showcase/makaron.jpg', text.text54)
 addActionBot ('btn_55', './img/showcase/ny.jpg', text.text55)
 addActionBot ('btn_56', './img/showcase/caramel.jpg', text.text56)
 addActionBot ('btn_57', './img/showcase/blueberry.jpg', text.text57)
 addActionBot ('btn_58', './img/showcase/berry.jpg', text.text58)
 addActionBot ('btn_59', './img/showcase/napc.jpg', text.text59)
 addActionBot ('btn_60', './img/showcase/napsh.jpg', text.text60)
 addActionBot ('btn_61', './img/showcase/pis.jpg', text.text61)
 addActionBot ('btn_62', './img/showcase/tvor.jpg', text.text62)
 addActionBot ('btn_63', './img/showcase/potato.jpg', text.text63)
 addActionBot ('btn_64', './img/showcase/forest.jpg', text.text64)
 addActionBot ('btn_65', './img/showcase/pryanik.jpg', text.text65)
 addActionBot ('btn_66', './img/showcase/chocom.jpg', text.text66)
 addActionBot ('btn_67', './img/showcase/min.jpg', text.text67)
 addActionBot ('btn_68', './img/showcase/oves.jpg', text.text68)
 addActionBot ('btn_69', './img/showcase/thchoc.jpg', text.text69)
 addActionBot ('btn_70', './img/showcase/ecler.jpg', text.text70)
 addActionBot ('btn_71', './img/showcase/taller.jpg', text.text71)
 addActionBot ('btn_72', './img/showcase/chocoh.jpg', text.text72)
 addActionBot ('btn_73', './img/showcase/minchip.jpg', text.text73)
 addActionBot ('btn_74', './img/showcase/sand.jpg', text.text74)
 addActionBot ('btn_75', './img/showcase/blin.jpg', text.text75)
 addActionBot ('btn_76', './img/showcase/ch.jpg', text.text76)
 addActionBot ('btn_77', './img/showcase/kubete.jpg', text.text77)
 addActionBot ('btn_78', './img/showcase/spinach.jpg', text.text78)
 addActionBot ('btn_79', './img/showcase/kubete.jpg', text.text79)
 addActionBot ('btn_80', './img/showcase/salatg.jpg', text.text80)
 addActionBot ('btn_81', './img/showcase/salatc.jpg', text.text81)
 addActionBot ('btn_82', './img/showcase/crc.jpg', text.text82)
 addActionBot ('btn_83', './img/showcase/rolls.jpg', text.text83)
 

bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))