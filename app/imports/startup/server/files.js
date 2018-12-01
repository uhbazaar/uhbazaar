import { Meteor } from "meteor/meteor";
import { Slingshot } from 'meteor/edgee:slingshot';

const fileUploads = () => Slingshot.createDirective("fileUploads", Slingshot.GoogleCloud, {
  bucket: "uhbazaar",
  maxSize: 1 * 1024 * 1024,
  acl: "public-read",
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  GoogleSecretKey: '{\n' +
      '  "type": "service_account",\n' +
      '  "project_id": "focus-tree-203206",\n' +
      '  "private_key_id": "33022853cb9e30939a84d3e56946756d395d0373",\n' +
      '  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC73ylyijPCL3eV\\nhcF6eauisNi0JC3mSTU0NuGMGegqe4Zx5bFPVZNVlQslxXej8hGaLIX6OQRP91/c\\nZ92izO0c+faYLVC0UwFxpywWLQKWOPR51gQyS2crBCmHLiC/C+HCWDnXaWIkovU8\\nRNqcXyCShsPLb0F8YxJkiTcUt7/tM1QZbxuE+de+FW9KDtm00pwlO8XIV6rfxICd\\n5npXb3jmIoQ1pbjBtds/tPu0FrraLHZMRScEIWbq9dVNkXWtO2pWZ6dDeyf8gKjM\\nV8Lb49hlHNi2AwXAiP2/hvX4soR1LxaW3hkGK60/a/GownD+5VDBnfzigFX76jVv\\n7i+cdEuPAgMBAAECggEAHUngI0wqX4aY5QWSMS7QtC9PyV2uji0xjy9TIE1VpXHW\\nduExMEYODxSKRVwwl62AUwHH7UeARZsyJaFHqz65ZIAPko/V+hbKrdY7CEYCFjtQ\\n2cGkq9aXgdxHQRzO3BnVG0A33D5An6eMBdZSIniuEknSMl/o3KRxVJ0TqjYvRKIr\\n5p2S1tUNRg2CwVwd+UldfLNavMzfjs7n4U2ahRG0Qk9oR5qECPnvCmlLP79/gozT\\n3fAUThwAUcGvOlEabO2zaLEafhoasRJ5Y531Gdws74z2WET0UxUWkCoFjuv8zydy\\nYGspnmm7xvl8CiKuTbkaaNnl9P6IAEoe+BxP6rmRYQKBgQD6xPyaVL2vbnztChPo\\nTKcQ0OyZ3hCso70jaqH70ZF29BcH7zT9hzu/qp8Jp6iC1JrwiHTLgRmiOY8jA+FH\\nIhll/QT2DjyUJ6VtHbd97uX1d5XyZ3HA0Ax7P1IZ++ZDi7tAlG2yF6hPxKNxAfms\\nQLSvMifofRzFPFZJBOhM13Jp0QKBgQC/ylM/gXhdc+H0G+CZuZHHkB9g1INeqLYW\\n3K+dQAeeK8hriYvThUu6Z8z3DwrwfCBVNjJ4xdkHErg63p1Lu7a+G0iA+DFAsLiY\\nAyHXooR+bxh0RR0eWhAs4I7rJeBhaAfHrkLy9PGbpszv6TC9t5CeTeGZ2TY9HW+C\\nn+jlH7lXXwKBgHGSH1kCAfpezsNH6iYt+Qfbpxw0f1bAvVs54uy6R+gYugmE43ni\\n8kNm0ao8vUurYBSJqGO2L1bSPKo+Cpv9rIUNJ18MqZDrt7cIW170gD9Ajq9++/y3\\n/L8guV09QVbcBM1Fq7yZjEe8Jc17eIjzsSEbVQmtCAenwOhHCbIrbQzRAoGACRwq\\nMiULO50qiXbdh0/KPel5pBbUGqX26EUZTmXhNsErpvgEnUqCm1sc4EtloKC0xHdr\\nlFMJiQ15lMpIPHWxK3yOSBoB9OmwCwBzFhQRKRRL3BIAXRW4GPmdsEu/ScEwRWrg\\noTvDUjptF6RC/W//vZVDdxRbQDHqvxCrdl64Zg8CgYBz6MMcmQHYTdCoX3ptBFoz\\nxv1K/YpWO08HPUApaIPexeNYxFGg+PakvW3yad0U54R6Oel6SJzQWjlE1v6q3Fcm\\neT6CVv3mUZqmlwBSVQ8iv60YXBuymnKtbq+AIGpYF2HJ0aPiFiYDbDlIWsY0sy2r\\nRI8gzvRglWnxiFQqj2QVMg==\\n-----END PRIVATE KEY-----\\n",\n' +
      '  "client_email": "uhbazaar@focus-tree-203206.iam.gserviceaccount.com",\n' +
      '  "client_id": "100047613109549416778",\n' +
      '  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n' +
      '  "token_uri": "https://oauth2.googleapis.com/token",\n' +
      '  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n' +
      '  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/uhbazaar%40focus-tree-203206.iam.gserviceaccount.com"\n' +
      '}\n',
  GoogleAccessId: 'uhbazaar@focus-tree-203206.iam.gserviceaccount.com',

  authorize: function () {

    if (!this.userId) {
      const message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;

  },

  key: function (file) {
    //Store file into a directory by the user's username.
    const user = Meteor.users.findOne(this.userId);
    return user.username + "/" + file.name;
  },
});
export { fileUploads };
