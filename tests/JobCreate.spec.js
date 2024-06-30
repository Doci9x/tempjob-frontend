import { mount } from '@vue/test-utils';
import JobCreate from '@/pages/Job/JobCreate.vue';
import axios from 'axios';
import flushPromises from 'flush-promises';
import { vi } from 'vitest';

vi.mock('axios');

describe('JobCreate.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(JobCreate, {
      global: {
        mocks: {
          $router: {
            push: vi.fn(),
          },
        },
      },
    });
    vi.clearAllMocks();
  });

  it('erstellt einen Job erfolgreich', async () => {
    axios.post.mockResolvedValue({ data: { message: 'Job erfolgreich erstellt' } });

    const nameInput = wrapper.find('input[placeholder="Unternehmen"]');
    const descriptionInput = wrapper.find('input[placeholder="Jobbeschreibung"]');
    const salaryInput = wrapper.find('input[placeholder="Zahlung"]');
    const requirementsInput = wrapper.find('input[placeholder="Anforderungen"]');
    const emailInput = wrapper.find('input[placeholder="Email"]');
    const phoneNumberInput = wrapper.find('input[placeholder="Telefonnummer"]');
    const locationInput = wrapper.find('input[placeholder="Standort"]');
    const startDateInput = wrapper.find('input[placeholder="Startdatum"]');
    const endDateInput = wrapper.find('input[placeholder="Enddatum"]');

    console.log(nameInput.exists());
    console.log(descriptionInput.exists());
    console.log(salaryInput.exists());
    console.log(requirementsInput.exists());
    console.log(emailInput.exists());
    console.log(phoneNumberInput.exists());
    console.log(locationInput.exists());
    console.log(startDateInput.exists());
    console.log(endDateInput.exists());

    await nameInput.setValue('Test Unternehmen');
    await descriptionInput.setValue('Test Beschreibung');
    await salaryInput.setValue('1000');
    await requirementsInput.setValue('Test Anforderungen');
    await emailInput.setValue('test@example.com');
    await phoneNumberInput.setValue('123456789');
    await locationInput.setValue('Test Stadt');
    await startDateInput.setValue('2024-01-01');
    await endDateInput.setValue('2024-01-01');

    await wrapper.find('button').trigger('click');

    await flushPromises();

    expect(axios.post).toHaveBeenCalledWith('https://webtech-project-backend.onrender.com/api/jobs', {
      name: 'Test Unternehmen',
      description: 'Test Beschreibung',
      email: 'test@example.com',
      phoneNumber: '123456789',
      location: 'Test Stadt',
      salary: '1000',
      startDate: '2024-01-01',
      endDate: '2024-01-01',
      requirements: 'Test Anforderungen',
    });

    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'TempJob' });
  });
});
