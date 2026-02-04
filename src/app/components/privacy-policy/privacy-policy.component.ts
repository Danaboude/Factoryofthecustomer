import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 class="text-4xl font-black text-brand-dark-blue mb-8">Privacy Policy</h1>
        
        <div class="prose prose-lg text-gray-600 max-w-none space-y-6">
          <p class="text-sm text-gray-400">Last updated: February 4, 2026</p>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to Factory of the Customer. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">2. Important Information and Who We Are</h2>
            <p>
              <strong>Purpose of this Privacy Policy</strong><br>
              This privacy policy aims to give you information on how Factory of the Customer collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up to our newsletter, purchase a product or service, or take part in a competition.
            </p>
            <p>
              <strong>Controller</strong><br>
              Factory of the Customer (brand of Principe41 BV) is the controller and responsible for your personal data.
            </p>
            <p>
              <strong>Contact Details</strong><br>
              If you have any questions about this privacy policy, please contact us at:<br>
              Email: info@factoryofthecustomer.com<br>
              Address: Frans Blocklaan 14, 2620 Hemiksem, Belgium
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">3. The Data We Collect About You</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">4. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>
        </div>
      </div>
    </div>
  `,
    styles: []
})
export class PrivacyPolicyComponent { }
