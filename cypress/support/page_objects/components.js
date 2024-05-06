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
        setlistContent: () => cy.get('p.info_title__KHXaB'),
        playlistActionBtn_1: () => cy.get('button.actions-playlist_button__Kexv0'),
        exitSetlistBtn: () => cy.get('button.button-icon_button___0nCI'),
        deleteCollectionBtn: () => cy.get('#modal_button_confirm'),
        modalShortcutsClose: () => cy.get('.modal-keyboard-shortcuts_close__kkQQ8'),
        modalCloseBtn: () => cy.get('#modal_button_close'),
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

    validateSetlistContent(content) {
        this.elements.setlistContent().should('contain', content);
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

    clickModalShortcutsClose() {
        this.elements.modalShortcutsClose().as('ShortcutsClose').should('be.visible')
        cy.get('@ShortcutsClose').click();
    }
    
    clickModalCloseBtn() {
        this.elements.modalCloseBtn().as('BtnModalClose').should('be.visible')
        cy.get('@BtnModalClose').click();
    }

    validateUserInfoBtn() {
        this.elements.userInfoBtn().as('btnUserInfo')
        cy.get('@btnUserInfo').should('be.visible')
    }

    clickUserInfoBtn() {
        this.elements.userInfoBtn().as('BtnUserInfo').should('be.visible')
        cy.get('@BtnUserInfo').click( {force: true} );
    }

    clickUserInfoSignoutBtn() {
        this.elements.userInfoSignoutBtn().as('BtnUserInfoSignout').should('be.visible')
        cy.get('@BtnUserInfoSignout').click( {force: true} );
    }
    validateDeleteCollection(){
        this.elements.setlistContent().should('not.exist');
    }
}

module.exports = new Components();