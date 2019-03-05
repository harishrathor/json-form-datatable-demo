
export default {
  dtOptions: {
    pagingType: "full_numbers",
    pageLength: 10,
    serverSide: true,
    autoWidth: true,
    columnDefs: [
      {
        targets: '_all',
        searchable: true,
        width: 150
      },
      {
        targets: 0,
        visible: false
      }
    ],
    ajax: window.location.href + "assets/data/DTBL00000001.json",
    columns: [
      {
        title: "Id",
        data: "id"
      },
      {
        title: "First Name",
        data: "firstName"
      },
      {
        title: "Last Name",
        data: "lastName"
      },
      {
        title: "Email",
        data: "email"
      },
      {
        title: "Phone",
        data: "phone"
      },
      {
        title: "Date Of Birth",
        data: "dob"
      },
      {
        title: "Country",
        data: "country"
      },
      {
        title: "State",
        data: "state"
      },
      {
        title: "City",
        data: "city"
      },
      {
        title: "Locality",
        data: "locality"
      },
      {
        title: "PIN Code",
        data: "pin"
      }
    ],
    scrollX: true,
  }
};
