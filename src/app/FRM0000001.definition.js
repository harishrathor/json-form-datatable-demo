let FormDef = {};
export default FormDef = {
  "code": "FRM0000001",
  "label": "Custom Data Field Definition",
  "name": "custom_data_field_definition",
  "type": "simple",
  "hideLabel": false,
  "hidden": false,
  "helpText": [],
  "collapse": true,
  "columns": 2,
  "order": 1,
  "fieldsDefaultProps": {
    "disabled": false,
    "labelPosition": "left",
    "labelAlignment": "right"
  },
  "fields": [{
      "code": "FLD0000001",
      "type": "TXT",
      "label": "Field Name",
      "name": "field_name",
      "defaultValue": "",
      "placeholder": "",
      "helpText": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "order": 1
    },
    {
      "code": "FLD0000002",
      "type": "TXT",
      "label": "Field Instructions",
      "name": "field_instructions",
      "defaultValue": "",
      "placeholder": "",
      "helpText": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "order": 2
    },
    {
      "code": "FLD0000003",
      "type": "SEL",
      "label": "Data Type",
      "name": "data_type",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "Binary",
          "value": "BINARY"
        },
        {
          "label": "Data Selector",
          "value": "DATE_SELECTOR"
        },
        {
          "label": "Lookup Value",
          "value": "LOOKUP_VALUE",
        },
        {
          "label": "Single Select Dropdown",
          "value": "SINGLE_SELECT_DROPDOWN"
        },
        {
          "label": "Text Small (100 char)",
          "value": "TEXT_SMALL"
        },
        {
          "label": "Text Large (Unlimited)",
          "value": "TEXT_LARGE"
        },
        {
          "label": "User or Group Selector",
          "value": "USER_GROUP_SELECTOR"
        }
      ],
      "order": 3
    },
    {
      "code": "FLD0000004",
      "type": "CHK",
      "label": "Hide when collapsed",
      "name": "hide_when_collapsed",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "order": 4
    },
    {
      "code": "FLD0000005",
      "type": "MSL",
      "label": "Select Form",
      "name": "select_form",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "User",
          "value": "userGroup_user"
        },
        {
          "label": "Group",
          "value": "userGroup_group"
        }
      ],
      "order": 5
    },
    {
      "code": "FLD0000006",
      "type": "RAD",
      "label": "Required Field",
      "name": "required_field",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "Always Required",
          "value": "ALWAYS"
        },
        {
          "label": "Never Required",
          "value": "NEVER"
        },
        {
          "label": "Depends on Field",
          "value": "DEPENDS_ON_FIELD",
          'disabled': true
        }
      ],
      "order": 6
    },
    {
      "code": "FLD0000007",
      "type": "RAD",
      "label": "Selection Type",
      "name": "selection_type",
      "defaultValue": "ALWAYS",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
        "label": "Single Select",
        "value": "single"
      }, {
        "label": "Multiple Select",
        "value": "multi"
      }],
      "order": 7
    },
    {
      "code": "FLD0000008",
      "type": "SEL",
      "label": "Default To",
      "name": "default_to",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "None",
          "value": "None"
        },
        {
          "label": "Logged In User",
          "value": "LoggedInUser"
        },
        {
          "label": "robertj@naehas.com",
          "value": "U2"
        }, {
          "label": "rohitj",
          "value": "U3"
        },
        {
          "label": "harishr",
          "value": "U4"
        }
      ],
      "order": 7
    },
    {
      "code": "FLD0000009",
      "type": "RAD",
      "label": "User Details",
      "name": "user_details",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
        "label": "On",
        "value": "on"
      }, {
        "label": "Off",
        "value": "off"
      }],
      "order": 8
    },
    {
      "code": "FLD0000010",
      "type": "TXT",
      "label": "On Label",
      "name": "on_label",
      "defaultValue": "",
      "placeholder": "",
      "helpText": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "order": 10
    },
    {
      "code": "FLD0000011",
      "type": "TXT",
      "label": "Off Label",
      "name": "off_label",
      "defaultValue": "",
      "placeholder": "",
      "helpText": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "order": 11
    },
    {
      "code": "FLD0000012",
      "type": "SEL",
      "label": "Dropdown Source Type",
      "name": "dropdown_source_type",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "Lookup Column",
          "value": "LOOKUP_COLUMN"
        },
        {
          "label": "Write in Values",
          "value": "WRITE_IN_VALUES"
        },
        {
          "label": "Variable Lookup Column",
          "value": "VARIABLE_LOOKUP_COLUMN"
        }
      ],
      "order": 12
    },
    {
      "code": "FLD0000013",
      "type": "TXT",
      "label": "Values (Comma Separated)",
      "name": "values_comma_separated",
      "defaultValue": "",
      "placeholder": "",
      "helpText": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "order": 13
    },
    {
      "code": "FLD0000014",
      "type": "RAD",
      "label": "Join Value",
      "name": "join_value",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
        "label": "On",
        "value": "on"
      }, {
        "label": "Off",
        "value": "off"
      }],
      "order": 14
    }, {
      "code": "FLD0000015",
      "type": "SEL",
      "label": "Status",
      "name": "status",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "Standard",
          "options": [{
              "label": "Status",
              "value": "39"
            },
            {
              "label": "Created By",
              "value": "44"
            },
            {
              "label": "Assignee",
              "value": "40"
            },
            {
              "label": "Created Date",
              "value": "45"
            },
            {
              "label": "Due Date",
              "value": "41"
            },
            {
              "label": "Notes",
              "value": "42"
            },
            {
              "label": "Active Users",
              "value": "43"
            }
          ]
        },
        {
          "label": "Overview",
          "options": [{
              "label": "User",
              "value": "47"
            },
            {
              "label": "Inventory code",
              "value": "48"
            },
            {
              "label": "Initial Request Date",
              "value": "49"
            },
            {
              "label": "Initial Requestor",
              "value": "50"
            },
            {
              "label": "Requestor Area",
              "value": "52"
            },
            {
              "label": "Change Status",
              "value": "53"
            },
            {
              "label": "Change Type",
              "value": "54"
            },
            {
              "label": "Change Category",
              "value": "55"
            },
            {
              "label": "Requested Go Live Date",
              "value": "56"
            },
            {
              "label": "Requested Expiration Date",
              "value": "57"
            },
            {
              "label": "Change Details (needed from Marketing Delivery Resources)",
              "value": "58"
            }
          ]
        },
        {
          "label": "Channels Impacted",
          "options": [{
              "label": "Business Partners impacted by this request",
              "value": "59"
            },
            {
              "label": "Channels Impacted",
              "value": "60"
            },
            {
              "label": "Call Center Roles",
              "value": "61"
            }
          ]
        },
        {
          "label": "Impact Analysis",
          "options": [{
            "label": "Articulate targeted and excluded customer segments",
            "value": "62"
          }]
        }
      ],
      "order": 15
    }
  ],
  "buttons": [{
      "code": "BTN0000001",
      "label": "Cancel",
      "name": "cancel_btn",
      "hidden": false,
      "disabled": false,
      "icon": "cancel",
      "events": [],
      "order": 1
    },
    {
      "code": "BTN0000002",
      "label": "Save",
      "name": "save_btn",
      "hidden": false,
      "disabled": false,
      "icon": "save",
      "events": [],
      "order": 2
    }
  ]
}
