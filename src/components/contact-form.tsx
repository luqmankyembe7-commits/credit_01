"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Field = "name" | "email" | "phone" | "topic" | "message";

const topics = ["Membership", "Savings", "Loans", "Welfare fund", "Something else"];

const empty = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(next: typeof empty) {
    const found: Partial<Record<Field, string>> = {};
    if (next.name.trim().length < 2) found.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      found.email = "Enter a valid email address.";
    }
    const phone = next.phone.replace(/\s/g, "");
    if (phone && !/^(\+256|0)[0-9]{9}$/.test(phone)) {
      found.phone = "Use a Ugandan number, such as 07XXXXXXXX or +2567XXXXXXXX.";
    }
    if (!next.topic) found.topic = "Choose a topic.";
    if (next.message.trim().length < 20) {
      found.message = "Write at least 20 characters so the request is clear.";
    }
    return found;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setValues(empty);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-11 px-3 text-base"
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
        />
        {errors.name ? (
          <p id="name-error" className="text-base font-medium text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-11 px-3 text-base"
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
        />
        {errors.email ? (
          <p id="email-error" className="text-base font-medium text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="h-11 px-3 text-base"
          onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
        />
        {errors.phone ? (
          <p id="phone-error" className="text-base font-medium text-destructive">
            {errors.phone}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="topic">Topic</Label>
        <select
          id="topic"
          name="topic"
          value={values.topic}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "topic-error" : undefined}
          className="h-11 w-full rounded-lg border border-input bg-card px-3 text-base text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          onChange={(event) => setValues((current) => ({ ...current, topic: event.target.value }))}
        >
          <option value="">Select a topic</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic ? (
          <p id="topic-error" className="text-base font-medium text-destructive">
            {errors.topic}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="min-h-32 px-3 py-3 text-base"
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
        />
        {errors.message ? (
          <p id="message-error" className="text-base font-medium text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" size="lg" className="h-12 rounded-full px-6 text-base">
        Check message
      </Button>
      <p className="text-base leading-7 text-foreground" role="status">
        {submitted && !values.company
          ? "The form checks out on this device. It was not sent. There is no inbox connected yet."
          : "This form stays in your browser. It does not create an account or send a message."}
      </p>
    </form>
  );
}
