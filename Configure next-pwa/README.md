Create a next.config.js file or edit the existing one

dest: 'public': Specifies where the service worker and related files should be generated (in the public folder).

register: true: Ensures the service worker is automatically registered.

skipWaiting: true: Ensures that a newly deployed service worker takes control of the page immediately without waiting for the old one to finish.

reactStrictMode: true: Standard Next.js setting to catch potential React issues during development.
