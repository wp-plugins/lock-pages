/* Lock Pages JavaScript */
jQuery( document ).ready( function($) {

	// Hide certain publishing controls
	if ( $( 'body' ).hasClass( 'page-locked' ) && $( 'div#misc-publishing-actions' ).length ) {
		$( 'div#misc-publishing-actions div#post-status-select' ).siblings( 'a' ).remove();
		$( 'div#misc-publishing-actions div#post-status-select' ).remove();
		$( 'div#misc-publishing-actions div#post-visibility-select' ).siblings( 'a' ).remove();
		$( 'div#misc-publishing-actions div#post-visibility-select' ).remove();
	}

});