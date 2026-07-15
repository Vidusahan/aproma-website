import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { services } from '../../data/services';
import Button from '../ui/Button';

const initial = { name: '', email: '', phone: '', service: '', message: '' };

/**
 * Contact / quote request form with basic client-side validation.
 * Submission is simulated — wire `handleSubmit` to your backend or email API.
 */
export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Please enter a valid email address.';
    if (!form.phone.trim()) er.phone = 'Please enter a contact number.';
    if (!form.message.trim()) er.message = 'Tell us a little about your requirement.';
    return er;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) return setErrors(er);
    // TODO: send `form` to your backend / email service here
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary-50 p-12 text-center">
        <FiCheckCircle className="text-5xl text-primary" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-dark">Message sent</h3>
        <p className="max-w-sm text-slate-500">
          Thank you — our team will contact you within one working day to arrange your free
          consultation.
        </p>
      </div>
    );
  }

  const inputClass = (field) =>
    `w-full rounded-2xl border bg-white px-5 py-3.5 text-dark placeholder:text-slate-400 transition-colors focus:border-primary ${
      errors[field] ? 'border-red-400' : 'border-slate-200'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-dark">
          Full name
        </label>
        <input
          id="cf-name"
          type="text"
          value={form.name}
          onChange={update('name')}
          placeholder="Your name"
          className={inputClass('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-semibold text-dark">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="you@example.com"
          className={inputClass('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-dark">
          Phone
        </label>
        <input
          id="cf-phone"
          type="tel"
          value={form.phone}
          onChange={update('phone')}
          placeholder="+94 7X XXX XXXX"
          className={inputClass('phone')}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="cf-service" className="mb-1.5 block text-sm font-semibold text-dark">
          I’m interested in
        </label>
        <select
          id="cf-service"
          value={form.service}
          onChange={update('service')}
          className={inputClass('service')}
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-dark">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your property, monthly bill or project…"
          className={inputClass('message')}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <FiSend aria-hidden="true" /> Send Message
        </Button>
      </div>
    </form>
  );
}
