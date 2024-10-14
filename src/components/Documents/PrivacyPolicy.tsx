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
        className='fixed top-0 left-0 right-0 h-1 bg-sky-400 dark:bg-amber-400'
        style={{ scaleX }}
      />
      <div className='flex flex-col gap-4 leading-8 my-12 text-black dark:text-white'>
        <h1 className='text-5xl font-semibold font-mono'>
          Privacy Policy for Get Rich
        </h1>
        <p>
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <p>
          Thank you for using <em>Get Rich</em>! We are committed to protecting
          your privacy and ensuring the security of your personal information.
          This Privacy Policy explains how we collect, use, and protect your
          data when you use our app.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect the following types of information when you use{' '}
          <em>Get Rich</em>:
        </p>
        <ul>
          <li>
            <strong>Personal Information:</strong> When you create an account,
            we may collect your name, email address, and any other details you
            provide voluntarily.
          </li>
          <li>
            <strong>Financial Data:</strong> We collect data such as your
            income, expenses, transfers, budgets, and asset information to help
            you manage your finances. This information is stored securely and
            only used for your financial tracking.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect data about how you use
            our app, such as the features you interact with, your device
            information, and usage logs.
          </li>
        </ul>
        <p>
          We do not access or store sensitive financial information like bank
          account numbers or credit card details.
        </p>

        <h2>2. How We Use Your Information</h2>
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

        <h2>3. Data Security</h2>
        <p>
          We prioritize the security of your data. We use industry-standard
          encryption to protect your personal and financial information from
          unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>
          Despite our efforts, no method of electronic transmission or storage
          is 100% secure. We cannot guarantee absolute security, but we
          continuously work to strengthen our systems.
        </p>

        <h2>4. Data Sharing and Disclosure</h2>
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

        <h2>5. Your Rights</h2>
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

        <h2>6. Third-Party Links</h2>
        <p>
          Our app may contain links to third-party websites or services. We are
          not responsible for the privacy practices of these third parties, and
          we encourage you to review their privacy policies.
        </p>

        <h2>7. Children&apos;s Privacy</h2>
        <p>
          <em>Get Rich</em> is not intended for users under the age of 13, and
          we do not knowingly collect personal information from children. If we
          discover that we have inadvertently collected such information, we
          will take immediate steps to delete it.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and we will notify you of significant changes
          via email or through the app. We encourage you to review this policy
          periodically to stay informed about how we protect your data.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          <strong>[Your Contact Information]</strong>
        </p>
      </div>
    </>
  );
}
