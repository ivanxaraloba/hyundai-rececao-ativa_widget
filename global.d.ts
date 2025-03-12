declare const ZOHO: {
  CREATOR: {
    API: {
      addRecord(data: Record<string, any>): Promise<any>;
      deleteRecord(id: string | number): Promise<any>;
      getAllRecords({
        appName,
        reportName,
        criteria,
        page,
        pageSize,
      }: {
        appName: string;
        reportName: string;
        criteria?: string;
        page?: number;
        pageSize?: number;
      }): Promise<any>;
      getRecordById({
        appName,
        reportName,
        id,
      }: {
        appName: string;
        reportName: string;
        id: string | number;
      }): Promise<any>;
      getRecordCount(query: Record<string, any>): Promise<number>;
      invokecustomapi(params: Record<string, any>): Promise<any>;
      readFile(fileId: string): Promise<string>;
      updateRecord({
        appName,
        reportName,
        id,
        data,
      }: {
        appName: string;
        reportName: string;
        id: string | number;
        data: { data: Record<string, any> };
      }): Promise<any>;
      uploadFile(fileData: Blob): Promise<any>;
    };
    UTIL: {
      getInitParams(): Promise<Record<string, any>>;
      getQueryParams(): Promise<Record<string, any>>;
      getWidgetParams(): Promise<Record<string, any>>;
      navigateParentURL(url: string): Promise<any>;
      setImageData(
        image: File,
        data: Record<string, any>,
        extraParams: Record<string, any>,
      ): Promise<any>;
    };
    init(): Promise<any>;
  };
};
