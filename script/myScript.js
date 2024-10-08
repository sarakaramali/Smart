$(function () {


    $('a').click(function (e) {
        e.preventDefault();
    })

    //welcome
    let welcome = [
        {
            image: 'uploads/welcome1.jpg',
            icon: 'uploads/right-quote.png',
            comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            wrapper: 'املی ریچارد کپی رایتر __@کتاب آنلاین'
        },
        {
            image: 'uploads/welcome2.jpg',
            icon: 'uploads/right-quote.png',
            comment: ' برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده',
            wrapper: 'املی ریچارد کپی رایتر __@کتاب آنلاین'
        },

        {
            image: 'uploads/welcome3.jpg',
            icon: 'uploads/right-quote.png',
            comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            wrapper: 'املی ریچارد کپی رایتر __@کتاب آنلاین'
        }
    ];


    $('.carousel-indicators li').click(function () {

        // let target = $(this).attr('href');
        // $('.active').removeClass('active')
        // $(target).addClass('active');
        //
        // alert(target);

        // let value = $(target).val();
        let value = $(this).text();
         let details = welcome[value - 1];
          $('.img-holder-welcome img').attr('src', details.image)
        $('.details-welcome img').attr('src', details.icon);
        $('.details-welcome p').text(details.comment);
        $('.details-welcome h6  ').text(details.wrapper);
    })


})