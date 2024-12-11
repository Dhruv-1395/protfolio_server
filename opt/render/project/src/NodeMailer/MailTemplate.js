const Template = (fname,phone,email,subject,message) => {
  return `
        <!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background-color: #007bff;
      color: #ffffff;
      padding: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
      color: #333333;
      font-size: 16px;
      line-height: 1.6;
    }
    .content p {
      margin: 10px 0;
    }
    
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9;">

<div class="container">
  <!-- Header -->
  <div class="header">
    New Message Received
  </div>

  <!-- Content -->
  <div class="content">
    <p><strong>First Name:</strong> ${fname} </p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
  </div>

  
</div>

</body>
</html>
`;
};

export default Template;
