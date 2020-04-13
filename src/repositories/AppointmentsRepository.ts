import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

interface CreateRepositoryDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    const { appointments } = this;

    return appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(apointment =>
      isEqual(date, apointment.date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateRepositoryDTO): Appointment {
    const appointment = new Appointment({
      provider,
      date,
    });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
