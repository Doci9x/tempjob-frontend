import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TempJobList from '../TempJobList.vue'

describe('TempJobList_AddJob', () => {
  it('fügt einen neuen Job zur Liste hinzu', async () => {
    // Komponente mounten
    const wrapper = mount(TempJobList)

    // Eingabefelder füllen
    await wrapper.find('input[placeholder="Restaurantname"]').setValue('Neues Restaurant')
    await wrapper.find('input[placeholder="Jobbeschreibung"]').setValue('Neue Jobbeschreibung')
    await wrapper.find('input[placeholder="Email"]').setValue('neuerjob@example.com')

    // Hinzufügen-Button klicken
    await wrapper.find('.btn-add').trigger('click')

    // Feedback-Nachricht überprüfen
    expect(wrapper.find('.alert-success').exists()).toBe(true)

    // Neue Liste überprüfen
    expect(wrapper.findAll('tbody tr')).toHaveLength(11) // Falls es vorher 10 Jobs gab
    expect(wrapper.text()).toContain('Neues Restaurant')
    expect(wrapper.text()).toContain('Neue Jobbeschreibung')
    expect(wrapper.text()).toContain('neuerjob@example.com')
  })
})

describe('TempJobList_DeleteJob', () => {
  it('löscht einen Job aus der Liste', async () => {
    // Komponente mounten
    const wrapper = mount(TempJobList)

    // Vor dem Löschen die Anzahl der Jobs speichern
    const initialJobCount = wrapper.vm.restaurantJobs.length

    // Job-ID für das Löschen auswählen (z. B. die ID des ersten Jobs)
    const jobIdToDelete = wrapper.vm.restaurantJobs[0].id

    // Löschen-Button klicken
    await wrapper.find('.btn-danger').trigger('click')

    // Überprüfen, ob die Anzahl der Jobs um eins reduziert wurde
    expect(wrapper.vm.restaurantJobs.length).toBe(initialJobCount - 1)

    // Überprüfen, ob der gelöschte Job nicht mehr in der Liste ist
    const isJobDeleted = wrapper.vm.restaurantJobs.some(job => job.id === jobIdToDelete)
    expect(isJobDeleted).toBe(false)
  })
})
