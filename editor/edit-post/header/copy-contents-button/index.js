/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress dependencies
 */
import { ClipboardButton } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getEditedPostContent } from '../../../store/selectors';

class CopyContentsButton extends Component {
	constructor() {
		super( ...arguments );
		this.state = { hasCopied: false };
		this.onCopy = this.onCopy.bind( this );
	}
	onCopy() {
		this.setState( { hasCopied: true } );
	}
	render() {
		return (
			<ClipboardButton
				text={ this.props.editedPostContent }
				className="components-menu-items__toggle"
				onCopy={ this.onCopy }
			>
				{ this.state.hasCopied ?
					__( 'Copied!' ) :
					__( 'Copy All Content' ) }
			</ClipboardButton>
		);
	}
}

export default connect(
	( state ) => ( {
		editedPostContent: getEditedPostContent( state ),
	} )
)( CopyContentsButton );
