'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function PrivacyPolicy() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className='fixed top-0 left-0 right-0 origin-top-left h-1 bg-sky-400 dark:bg-amber-400'
        style={{ scaleX }}
      />
      <div className='flex flex-col gap-4 leading-8 my-12 text-black dark:text-white'>
        <h1 className='text-5xl font-semibold font-mono'>
          Privacy Policy for Get Rich
        </h1>
        <p>
          <strong>Effective Date:</strong> 2024 November 11
        </p>

        <p>
          Thank you for using <em>Get Rich</em>! We are committed to protecting
          your privacy and ensuring the security of your personal information.
          This Privacy Policy explains how we collect, use, and protect your
          data when you use our app.
        </p>

        <h2 className='text-xl font-semibold'>1. Information We Collect</h2>
        <p>
          We collect the following types of information when you use{' '}
          <em>Get Rich</em>:
        </p>

        <h3 className='text-lg font-semibold'>Data Used to Track You</h3>
        <p>
          The following data may be used to track you across apps and websites
          owned by other companies:
        </p>
        <ul>
          <li>
            <strong>Diagnostics:</strong> Information about app performance to
            identify and fix issues.
          </li>
          <li>
            <strong>Crash Data:</strong> Data related to app crashes to enhance
            reliability.
          </li>
          <li>
            <strong>Performance Data:</strong> Information about app speed and
            functionality to improve user experience.
          </li>
        </ul>

        <h3 className='text-lg font-semibold'>Data Linked to You</h3>
        <p>The following data may be collected and linked to your identity:</p>
        <ul>
          <li>
            <strong>Contact Info:</strong> Name and email address (if provided
            during account creation).
          </li>
        </ul>

        <h3 className='text-lg font-semibold'>Data Not Linked to You</h3>
        <p>
          The following data may be collected but is not linked to your
          identity:
        </p>
        <ul>
          <li>
            <strong>User Content:</strong> Photos or videos you upload within
            the app.
          </li>
          <li>
            <strong>Diagnostics:</strong> General performance and crash data,
            anonymized for analysis.
          </li>
          <li>
            <strong>Contact Info:</strong> Name, used in account-related
            functionality.
          </li>
        </ul>

        <h3 className='text-lg font-semibold'>Financial Data</h3>
        <p>
          We collect data such as your income, expenses, transfers, budgets, and
          asset information to help you manage your finances. This information
          is stored securely and used only for your financial tracking.
        </p>
        <p>
          We do not access or store sensitive financial information like bank
          account numbers or credit card details.
        </p>

        <h2 className='text-xl font-semibold'>
          2. How We Use Your Information
        </h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>
            <strong>To provide and maintain the service:</strong> We use your
            data to allow you to track your expenses, set budgets, manage
            transfers, and visualize analytics.
          </li>
          <li>
            <strong>To improve our app:</strong> We analyze usage data to
            understand how users interact with <em>Get Rich</em> and enhance its
            features.
          </li>
          <li>
            <strong>To send reminders:</strong> If you enable daily reminders,
            we use your information to notify you about logging expenses and
            reviewing your finances.
          </li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third
          parties for marketing purposes.
        </p>

        <h2 className='text-xl font-semibold'>3. Data Security</h2>
        <p>
          We prioritize the security of your data and use industry-standard
          encryption to protect it from unauthorized access, alteration, or
          disclosure. However, no method of electronic transmission or storage
          is completely secure. While we strive to protect your data, we cannot
          guarantee absolute security.
        </p>

        <h2 className='text-xl font-semibold'>
          4. Data Sharing and Disclosure
        </h2>
        <p>We only share your data in the following cases:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with trusted service providers who assist us in operating the app
            (e.g., cloud hosting). These providers are required to maintain the
            confidentiality of your data.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your data when
            required by law or in response to valid legal requests.
          </li>
        </ul>

        <h2 className='text-xl font-semibold'>5. Your Rights</h2>
        <p>You have the following rights regarding your data:</p>
        <ul>
          <li>
            <strong>Access and Correction:</strong> You can access and update
            your personal and financial information through the app.
          </li>
          <li>
            <strong>Deletion:</strong> You can request to delete your account
            and associated data at any time. Once deleted, your data will no
            longer be accessible.
          </li>
          <li>
            <strong>Opt-out:</strong> You can disable reminders or notifications
            in your app settings at any time.
          </li>
        </ul>

        <h2 className='text-xl font-semibold'>6. Third-Party Links</h2>
        <p>
          Our app may contain links to third-party websites or services. We are
          not responsible for the privacy practices of these third parties, and
          we encourage you to review their privacy policies.
        </p>

        <h2 className='text-xl font-semibold'>7. Children&apos;s Privacy</h2>
        <p>
          <em>Get Rich</em> is not intended for users under the age of 13, and
          we do not knowingly collect personal information from children. If we
          discover that we have inadvertently collected such information, we
          will take immediate steps to delete it.
        </p>

        <h2 className='text-xl font-semibold'>
          8. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and we will notify you of significant changes
          via email or through the app. We encourage you to review this policy
          periodically to stay informed about how we protect your data.
        </p>

        <h2 className='text-xl font-semibold'>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          <strong>Email: </strong>
          <a
            href='getrich.help.service@gmail.com'
            className='text-blue-600 dark:text-blue-200'
          >
            getrich.help.service@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}
