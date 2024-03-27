## Introduction

This is the react-pagination-v3 package, providing a customizable and user-friendly pagination component for React applications. It simplifies the process of displaying page controls, allowing users to navigate through large datasets efficiently.

### Installation

Install the package using npm or yarn:

Bash
```
npm install react-pagination-v3 clsx tailwind-merge
yarn add react-pagination-v3 clsx tailwind-merge
```

### Import and Usage

Import the Pagination component into your React component:

JavaScript
```
import Pagination from 'react-pagination-v3';
```

#### Then, use the component as follows:

JavaScript
```
function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10; // Adjust based on your data

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Pagination
      currentPage={currentPage}
      onPaginate={handlePaginate}
      totalPage={totalPage}
    />
  );
}
```

### Features

Clear and concise page navigation: Users can easily navigate between pages using buttons representing page numbers.
Automatic page range: The component dynamically displays a limited range of page buttons based on the current page and a customizable limit. This ensures a clean and uncluttered user interface, especially for large datasets.
First/Last page buttons: Provides convenient options to quickly jump to the first or last page.
Ellipsis (...) for hidden pages: When the total page count exceeds the displayed range, an ellipsis (...) indicates the existence of hidden pages.
Customizable styling: The component leverages clsx and tailwind-merge (if available in your project) to offer flexibility in styling the pagination controls using CSS classes. This allows you to tailor the look and feel to match your application's design.
Styling (Optional)

If you're using Tailwind CSS, you can style the pagination buttons by creating appropriate CSS classes in your Tailwind configuration files. For example:

### CSS
```
/* tailwind.config.js */
module.exports = {
  // ... other Tailwind configuration options
  theme: {
    extend: {
      backgroundColor: {
        'success': '#0070f3',
      },
    },
  },
};
```

### Additional Notes

Feel free to adjust the default styling provided by the component to match your project's theme.
You can extend the functionality of this component by adding features like custom page size selection or disabling buttons based on certain conditions.
I hope this comprehensive README.md provides a clear and informative guide to using the react-pagination-v3 package effectively in your React applications.
