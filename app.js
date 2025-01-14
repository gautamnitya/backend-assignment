<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Results</title>
</head>
<body>
  <h1>Search results for "<%= query %>"</h1>

  <% if (results.length > 0) { %>
    <ul>
      <% results.forEach(function(result) { %>
        <li><%= result %></li>
      <% }); %>
    </ul>
  <% } else { %>
    <p>No results found for "<%= query %>"</p>
  <% } %>

  <a href="/">Go back to search</a>
</body>
</html>
