// cypress/pages/SeparateTracksPage.js

class SeparateTracksPage {
    elements = {
        newBtn: () => cy.get("#add_new_song_button"),
        addBtn: () => cy.get("#empty_state_add_button"),
        uploadBtn: () => cy.get("#upload_from_computer_tab"),
        selectFileDropzone: () => cy.get(".select-local-file_dropzone__48wgh"),
        selectFileContainer: () => cy.get('.select-local-file_container___iOmG'),
        nextBtn: () => cy.get('#upload_next_button'),
        vocalsDrumsList: () => cy.get('#vocals-drums-bass-other'),
        previousBtn: () => cy.get('#upload_previous_button'),
        submitBtn: () => cy.get('#upload_submit_button'),
        taskActionBtn_1: () => cy.get('button.actions-task_button__aL7mi'),
        deleteLibraryBtn: () => cy.get('#library_song_delete_from_library_option'),
        deleteSongBtn: () => cy.get('#modal_button_confirm')
    }

    visit() {
        cy.visit('/library');
    }

    clickAddButton() {
        this.elements.addBtn().as('btnAdd').should('be.visible')
        cy.get('@btnAdd').click();
    }

    clickUploadButton() {
        this.elements.uploadBtn().as('btnUpload').should('be.visible')
        cy.get('@btnUpload').click({force: true});
    }

    clickSelectFile() {
        this.elements.selectFileDropzone().as('dropzone').should('be.visible')
        cy.get('@dropzone').click();
    }

    addTracks(filename) {
        this.elements.selectFileDropzone().as('dropzone')
        cy.get('@dropzone').selectFile(filename, {action: "drag-drop"});
    }

    validateInvalidFileError(errorMessage) {
        this.elements.selectFileContainer().as('container')
        cy.get('@container').should('be.visible').contains(errorMessage);
    }

    clickNextButton() {
        this.elements.nextBtn().as('btnNext').should('be.visible')
        cy.get('@btnNext').click();
    }

    clickSeparationType() {
        this.elements.vocalsDrumsList().as('listVocalsDrums').should('be.visible')
        cy.get('@listVocalsDrums').click();
    }

    clickSubmitButton() {
        this.elements.submitBtn().as('btnSubmit').should('be.visible')
        cy.get('@btnSubmit').click();
    }
    
    validateUploadSong(trackName) {
        cy.get('[title="' + trackName + '"]')
        .should('be.visible')
        .contains(trackName);
    }

    clickTaskActionBtn_1() {
        this.elements.taskActionBtn_1().click( {force: true} );
    }

    clickDeleteLibrary() {
        this.elements.deleteLibraryBtn().as('BtnDeleteLibrary').should('be.visible')
        cy.get('@BtnDeleteLibrary').click( {force: true} );
    }

    clickDeleteSong() {
        this.elements.deleteSongBtn().as('BtnDeleteSong').should('be.visible')
        cy.get('@BtnDeleteSong').click( {force: true} );
    }

    validateDeleteSong(trackName) {
        cy.get('[title="' + trackName + '"]').should('not.exist');
    }
}

module.exports = new SeparateTracksPage();