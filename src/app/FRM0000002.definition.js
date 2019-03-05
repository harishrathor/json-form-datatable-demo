let FormDef = {};
export default FormDef = {
  "code": "FRM0000002",
  "label": "Edit Task Type Values",
  "name": "edit_task_type_values",
  "type": "simple",
  "hideLabel": false,
  "hidden": false,
  "helpText": [],
  "collapse": true,
  "columns": 1,
  "order": 2,
  "fieldsDefaultProps": {
    "disabled": false,
    "labelPosition": "left",
    "labelAlignment": "left"
  },
  "fields": [{
      "code": "FLD0000016",
      "type": "TXT",
      "label": "Task Type Name",
      "name": "task_type_name",
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
      "code": "FLD0000017",
      "type": "TXT",
      "label": "Default Title",
      "name": "default_title",
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
      "code": "FLD0000018",
      "type": "TXA",
      "label": "Default Notes",
      "name": "default_notes",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [],
      "order": 3
    },
    {
      "code": "FLD0000019",
      "type": "CHK",
      "label": "Viewable in New Task Dialog ?",
      "name": "viewwable_in_new_task_dialog",
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
      "code": "FLD0000020",
      "type": "SEL",
      "label": "Default Assignee",
      "name": "default_assignee",
      "defaultValue": "LoggedInUser",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "Logged In User",
          "value": "LoggedInUser"
        },
        {
          "label": "harishr",
          "value": "U4"
        },
        {
          "label": "robertj@naehas.com",
          "value": "U2"
        },
        {
          "label": "rohitj",
          "value": "U3"
        }
      ],
      "order": 5
    },
    {
      "code": "FLD0000021",
      "type": "RAD",
      "label": "Default Security",
      "name": "default_security",
      "defaultValue": "all",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [{
          "label": "Standard Visibility",
          "value": "all"
        },
        {
          "label": "Only allow selected users/groups to access this Task",
          "value": "selected"
        }
      ],
      "order": 6
    }, {
      "code": "FLD0000022",
      "type": "MSL",
      "label": "Users/Group",
      "name": "users_group",
      "defaultValue": "",
      "placeholder": "",
      "hidden": false,
      "disabled": false,
      "validations": [],
      "events": [],
      "options": [
        {
          "label": "Users",
          "options": [{
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
          ]
        }
      ],
      "order": 7
    }
  ],
  "buttons": [{
      "code": "BTN0000003",
      "label": "Cancel",
      "name": "cancel_btn",
      "hidden": false,
      "disabled": false,
      "icon": "cancel",
      "events": [],
      "order": 1
    },
    {
      "code": "BTN0000004",
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
