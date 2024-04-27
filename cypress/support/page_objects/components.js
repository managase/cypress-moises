// cypress/pages/Components.js

class Components {
    elements = {
        moisesLogo: () => cy.get("#side_bar_moises_logo"),
        trackSeparationSideBar: () => cy.get("#side_bar_track_separation"),
        voiceStudioSideBar: () => cy.get("#side_bar_voice_studio"),
        masteringSideBar: () => cy.get("#side_bar_mastering"),
        lyricWriterSideBar: () => cy.get("#side_bar_lyric_writer"),
        pluginSideBar: () => cy.get("#side_bar_plugins"),
        newPlayListBtn: () => cy.get("#new_playlist_button"),
        playlistActionBtn_1: () => cy.get('button.actions-playlist_button__Kexv0'),
        exitSetlistBtn: () => cy.get('button.button-icon_button___0nCI'),
        deleteCollectionBtn: () => cy.get('#modal_button_confirm'),
        userInfoBtn: () => cy.get('#user_info_button'),
        userInfoSignoutBtn: () => cy.get('#user_info_sign_out')
    }

    clickMoisesLogo() {
        this.elements.moisesLogo().as('LogoMoises').should('be.visible')
        cy.get('@LogoMoises').click();
    }

    clickTrackSeparationSideBar() {
        this.elements.trackSeparationSideBar().as('SbTrackSeparation').should('be.visible')
        cy.get('@SbTrackSeparation').click();
    }

    clickVoiceStudioSideBar() {
        this.elements.voiceStudioSideBar().as('SbVoiceStudio').should('be.visible')
        cy.get('@SbVoiceStudio').click();
    }

    clickMasteringSideBar() {
        this.elements.masteringSideBar().as('SbMastering').should('be.visible')
        cy.get('@SbMastering').click();
    }

    clickLyricWriterSideBar() {
        this.elements.lyricWriterSideBar().as('SbLyricWriter').should('be.visible')
        cy.get('@SbLyricWriter').click();
    }

    clickPluginSideBar() {
        this.elements.pluginSideBar().as('SbPlugin').should('be.visible')
        cy.get('@SbPlugin').click();
    }

    clickNewPlayListBtn() {
        this.elements.newPlayListBtn().as('BtnNewPlayList').should('be.visible')
        cy.get('@BtnNewPlayList').click();
    }

    clickPlaylistActionBtn_1() {
        this.elements.playlistActionBtn_1().click( {force: true} );
    }

    clickExitSetlist() {
        this.elements.exitSetlistBtn().as('BtnExitSetlist').should('be.visible')
        cy.get('@BtnExitSetlist').click( { multiple: true, force: true } );
    }

    clickDeleteCollection() {
        this.elements.deleteCollectionBtn().click( {force: true} );
    }

    clickUserInfoBtn() {
        this.elements.userInfoBtn().as('BtnUserInfo').should('be.visible')
        cy.get('@BtnUserInfo').click( {force: true} );
    }

    clickUserInfoSignoutBtn() {
        this.elements.userInfoSignoutBtn().as('BtnUserInfoSignout').should('be.visible')
        cy.get('@BtnUserInfoSignout').click( {force: true} );
    }
}

module.exports = new Components();