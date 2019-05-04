

$('document').ready(function(){console.log('ready'); 
$('.unitContainer').click(function(e) {
    window.location.href = $(e.currentTarget).attr('data-link');
})})

function female(data) {
//GLOBAL STATE VARS
    this.frontPageVisible = true;
    this.currentSection = false;

    this.blankContentBlock = " \
        <div class='unitContainer'> \
            <div class='unitPicture'><img src='imgSrc' ></div> \
            <div class='unitDetails'> \
                <h2 class='unitTitle'>£title£</h2> \
                <h3 class='unitSubtitle'>£subTitle£</h3> \
                <p class='unitText'>£text£</p>\
            </div> \
        </div> \
    ";

    this.availableBlocks = [];

    this.construct = function () {
        // fill up available blocks with data




    }


    this.hideFrontPage = function (sectionId) {
    
        // hide h1
    
        // move logo to left
    
        // move menu bar up
    
    }
    
    this.showFrontPage = function () {
        // show h1
    
        // move logo to middle
    
        // move menu bar down
    
    }

    this.showMenuPage = function () {

    }

    this.showContentPage = function () {


    }
    
    this.getContentBlock = function (blockContentsArr) {
        var block = blankContentBlock;
        for (var content in blockContentsArr) {
            block = block.replace('£' + content + '£', blockContentsArr[content]);
        }
        return block;
    }
}



//MOVE TO CORRECT CONTENT SECTION
function goToLink(event) {
    var sectionId = $(event.currentTarget).attr('data-link');

    if (frontPageVisible) { // move left bar version of girl over to front page position, then animate back again!
        //work out position of girl we clicked
        clickedGirl = $('#frontPage .girlContainer[data-link=' + sectionId + ']').children('img');
        var posStart = clickedGirl.offset();
        posStart.position = 'fixed';
        posStart.width = '200px';
        //find appropriate girl in the left bar
        var girlToMove = $('.girlContainer > .' + sectionId);
        // make her visible so we can...
        girlToMove.css({ 'display': 'initial' });
        // get her position
        var posEnd = girlToMove.offset();
        //hide the front page version
        clickedGirl.css('display', 'none');
        // send her over to the middle of the page
        girlToMove.css(posStart);
        //animate her back over to her starting place
        girlToMove.animate({ position: 'absolute', 'left': 30, 'top': posEnd.top, 'width': '130px' }, 900, function () {
            //restore original properties.
            girlToMove.css({ 'position': 'initial' });
            clickedGirl.css('display', 'initial');
        });
        hideFrontPage(sectionId);
    } else if (currentSection != sectionId) {
        // swap the ladies
        $('.girlContainer > .' + currentSection).fadeOut(600, function () {
            $('.girlContainer > .' + sectionId).fadeIn(600);
        });
        // work out what we need to show
        var elToScrollTo = $('#' + sectionId + 'Section > .title');
        $('#rightContent').animate({
            scrollTop: elToScrollTo.position().top
        }, 600);
    }
    currentSection = sectionId;
}




/* TABLE STRUCTURE FOR CONTENT

title
subTitle 
text    -- blob or suttin
imgSrc -- filelocation
parent -- EVENTS, ABOUT, INTERVIEWS, MEDIA


*/
