export interface QuestionOptionConfig {
  QuestionOptionID: number;
  QuestionID: number;
  Description: string;
  Value: string;
  Priority: number;
  Lambda: any;
  CreatedOn: string;
  CreatedBy: number;
  PHQIDIfSelected: number;
  IsActive: boolean;
}

export interface QuestionConfig {
  QuestionID: number;
  SectionID: number;
  Name: string;
  Label: string;
  UI: 'lb' | 'cb' | 'tb' | 'rbil';
  Priority: number;
  ProcAttribID: number;
  IsRequired: boolean;
  Lambda: any;
  CreatedOn: string;
  CreatedBy: number;
  PHQIDIfSelected: number;
  IsActive: boolean;
  Options: QuestionOptionConfig[];
  Value?: boolean | string;
}

export interface SectionConfig {
  SectionID: number;
  PageID: number;
  Priority: number;
  Label: string;
  Type: any;
  CreatedOn: string;
  CreatedBy: number;
  IsActive: boolean;
  Questions: QuestionConfig[];
}

export interface PageConfig {
  PageID: number;
  Name: string;
  Label: string;
  NextPageId: number;
  Outlet: any;
  Validation: any;
  Priority: number;
  CreatedOn: string;
  CreatedBy: number;
  isActive: boolean;
  Sections: SectionConfig[];
}
