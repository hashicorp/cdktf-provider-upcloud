// https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDatabasePostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#id ManagedDatabasePostgresql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Maintenance window UTC time in hh:mm:ss format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#name ManagedDatabasePostgresql#name}
  */
  readonly name: string;
  /**
  * Service plan to use. This determines how much resources the instance will have
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}
  */
  readonly plan: string;
  /**
  * The administrative power state of the service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}
  */
  readonly powered?: boolean | cdktf.IResolvable;
  /**
  * Title of a managed database instance
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#title ManagedDatabasePostgresql#title}
  */
  readonly title?: string;
  /**
  * Zone where the instance resides
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}
  */
  readonly zone: string;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}
  */
  readonly properties?: ManagedDatabasePostgresqlProperties;
}
export interface ManagedDatabasePostgresqlComponents {
}

export function managedDatabasePostgresqlComponentsToTerraform(struct?: ManagedDatabasePostgresqlComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ManagedDatabasePostgresqlComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDatabasePostgresqlComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class ManagedDatabasePostgresqlComponentsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedDatabasePostgresqlComponentsOutputReference {
    return new ManagedDatabasePostgresqlComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabasePostgresqlNodeStates {
}

export function managedDatabasePostgresqlNodeStatesToTerraform(struct?: ManagedDatabasePostgresqlNodeStates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ManagedDatabasePostgresqlNodeStatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedDatabasePostgresqlNodeStates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlNodeStates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ManagedDatabasePostgresqlNodeStatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagedDatabasePostgresqlNodeStatesOutputReference {
    return new ManagedDatabasePostgresqlNodeStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedDatabasePostgresqlPropertiesMigration {
  /**
  * Database name for bootstrapping the initial connection
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#host ManagedDatabasePostgresql#host}
  */
  readonly host?: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Password for authentication with the server where to migrate data from
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#password ManagedDatabasePostgresql#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#port ManagedDatabasePostgresql#port}
  */
  readonly port?: number;
  /**
  * The server where to migrate data from is secured with SSL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#username ManagedDatabasePostgresql#username}
  */
  readonly username?: string;
}

export function managedDatabasePostgresqlPropertiesMigrationToTerraform(struct?: ManagedDatabasePostgresqlPropertiesMigrationOutputReference | ManagedDatabasePostgresqlPropertiesMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    host: cdktf.stringToTerraform(struct!.host),
    ignore_dbs: cdktf.stringToTerraform(struct!.ignoreDbs),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ManagedDatabasePostgresqlPropertiesMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ignoreDbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDbs = this._ignoreDbs;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbname = undefined;
      this._host = undefined;
      this._ignoreDbs = undefined;
      this._password = undefined;
      this._port = undefined;
      this._ssl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbname = value.dbname;
      this._host = value.host;
      this._ignoreDbs = value.ignoreDbs;
      this._password = value.password;
      this._port = value.port;
      this._ssl = value.ssl;
      this._username = value.username;
    }
  }

  // dbname - computed: true, optional: true, required: false
  private _dbname?: string; 
  public get dbname() {
    return this.getStringAttribute('dbname');
  }
  public set dbname(value: string) {
    this._dbname = value;
  }
  public resetDbname() {
    this._dbname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbnameInput() {
    return this._dbname;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ignore_dbs - computed: true, optional: true, required: false
  private _ignoreDbs?: string; 
  public get ignoreDbs() {
    return this.getStringAttribute('ignore_dbs');
  }
  public set ignoreDbs(value: string) {
    this._ignoreDbs = value;
  }
  public resetIgnoreDbs() {
    this._ignoreDbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDbsInput() {
    return this._ignoreDbs;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ManagedDatabasePostgresqlPropertiesPgbouncer {
  /**
  * If the automatically created database pools have been unused this many seconds, they are freed. If 0 then timeout is disabled. [seconds]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}
  */
  readonly autodbIdleTimeout?: number;
  /**
  * Do not allow more than this many server connections per database (regardless of user). Setting it to 0 means unlimited.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}
  */
  readonly autodbMaxDbConnections?: number;
  /**
  * PGBouncer pool mode
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}
  */
  readonly autodbPoolMode?: string;
  /**
  * If non-zero then create automatically a pool of that size per user when a pool doesn't exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}
  */
  readonly autodbPoolSize?: number;
  /**
  * List of parameters to ignore when given in startup packet
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}
  */
  readonly ignoreStartupParameters?: string[];
  /**
  * Add more server connections to pool if below this number. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}
  */
  readonly minPoolSize?: number;
  /**
  * If a server connection has been idle more than this many seconds it will be dropped. If 0 then timeout is disabled. [seconds]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}
  */
  readonly serverIdleTimeout?: number;
  /**
  * The pooler will close an unused server connection that has been connected longer than this. [seconds]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}
  */
  readonly serverLifetime?: number;
  /**
  * Run server_reset_query (DISCARD ALL) in all pooling modes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}
  */
  readonly serverResetQueryAlways?: boolean | cdktf.IResolvable;
}

export function managedDatabasePostgresqlPropertiesPgbouncerToTerraform(struct?: ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference | ManagedDatabasePostgresqlPropertiesPgbouncer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodb_idle_timeout: cdktf.numberToTerraform(struct!.autodbIdleTimeout),
    autodb_max_db_connections: cdktf.numberToTerraform(struct!.autodbMaxDbConnections),
    autodb_pool_mode: cdktf.stringToTerraform(struct!.autodbPoolMode),
    autodb_pool_size: cdktf.numberToTerraform(struct!.autodbPoolSize),
    ignore_startup_parameters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ignoreStartupParameters),
    min_pool_size: cdktf.numberToTerraform(struct!.minPoolSize),
    server_idle_timeout: cdktf.numberToTerraform(struct!.serverIdleTimeout),
    server_lifetime: cdktf.numberToTerraform(struct!.serverLifetime),
    server_reset_query_always: cdktf.booleanToTerraform(struct!.serverResetQueryAlways),
  }
}

export class ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesPgbouncer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodbIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbIdleTimeout = this._autodbIdleTimeout;
    }
    if (this._autodbMaxDbConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbMaxDbConnections = this._autodbMaxDbConnections;
    }
    if (this._autodbPoolMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolMode = this._autodbPoolMode;
    }
    if (this._autodbPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolSize = this._autodbPoolSize;
    }
    if (this._ignoreStartupParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreStartupParameters = this._ignoreStartupParameters;
    }
    if (this._minPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPoolSize = this._minPoolSize;
    }
    if (this._serverIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdleTimeout = this._serverIdleTimeout;
    }
    if (this._serverLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLifetime = this._serverLifetime;
    }
    if (this._serverResetQueryAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResetQueryAlways = this._serverResetQueryAlways;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesPgbouncer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autodbIdleTimeout = undefined;
      this._autodbMaxDbConnections = undefined;
      this._autodbPoolMode = undefined;
      this._autodbPoolSize = undefined;
      this._ignoreStartupParameters = undefined;
      this._minPoolSize = undefined;
      this._serverIdleTimeout = undefined;
      this._serverLifetime = undefined;
      this._serverResetQueryAlways = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autodbIdleTimeout = value.autodbIdleTimeout;
      this._autodbMaxDbConnections = value.autodbMaxDbConnections;
      this._autodbPoolMode = value.autodbPoolMode;
      this._autodbPoolSize = value.autodbPoolSize;
      this._ignoreStartupParameters = value.ignoreStartupParameters;
      this._minPoolSize = value.minPoolSize;
      this._serverIdleTimeout = value.serverIdleTimeout;
      this._serverLifetime = value.serverLifetime;
      this._serverResetQueryAlways = value.serverResetQueryAlways;
    }
  }

  // autodb_idle_timeout - computed: true, optional: true, required: false
  private _autodbIdleTimeout?: number; 
  public get autodbIdleTimeout() {
    return this.getNumberAttribute('autodb_idle_timeout');
  }
  public set autodbIdleTimeout(value: number) {
    this._autodbIdleTimeout = value;
  }
  public resetAutodbIdleTimeout() {
    this._autodbIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbIdleTimeoutInput() {
    return this._autodbIdleTimeout;
  }

  // autodb_max_db_connections - computed: true, optional: true, required: false
  private _autodbMaxDbConnections?: number; 
  public get autodbMaxDbConnections() {
    return this.getNumberAttribute('autodb_max_db_connections');
  }
  public set autodbMaxDbConnections(value: number) {
    this._autodbMaxDbConnections = value;
  }
  public resetAutodbMaxDbConnections() {
    this._autodbMaxDbConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbMaxDbConnectionsInput() {
    return this._autodbMaxDbConnections;
  }

  // autodb_pool_mode - computed: true, optional: true, required: false
  private _autodbPoolMode?: string; 
  public get autodbPoolMode() {
    return this.getStringAttribute('autodb_pool_mode');
  }
  public set autodbPoolMode(value: string) {
    this._autodbPoolMode = value;
  }
  public resetAutodbPoolMode() {
    this._autodbPoolMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolModeInput() {
    return this._autodbPoolMode;
  }

  // autodb_pool_size - computed: true, optional: true, required: false
  private _autodbPoolSize?: number; 
  public get autodbPoolSize() {
    return this.getNumberAttribute('autodb_pool_size');
  }
  public set autodbPoolSize(value: number) {
    this._autodbPoolSize = value;
  }
  public resetAutodbPoolSize() {
    this._autodbPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolSizeInput() {
    return this._autodbPoolSize;
  }

  // ignore_startup_parameters - computed: true, optional: true, required: false
  private _ignoreStartupParameters?: string[]; 
  public get ignoreStartupParameters() {
    return this.getListAttribute('ignore_startup_parameters');
  }
  public set ignoreStartupParameters(value: string[]) {
    this._ignoreStartupParameters = value;
  }
  public resetIgnoreStartupParameters() {
    this._ignoreStartupParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreStartupParametersInput() {
    return this._ignoreStartupParameters;
  }

  // min_pool_size - computed: true, optional: true, required: false
  private _minPoolSize?: number; 
  public get minPoolSize() {
    return this.getNumberAttribute('min_pool_size');
  }
  public set minPoolSize(value: number) {
    this._minPoolSize = value;
  }
  public resetMinPoolSize() {
    this._minPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPoolSizeInput() {
    return this._minPoolSize;
  }

  // server_idle_timeout - computed: true, optional: true, required: false
  private _serverIdleTimeout?: number; 
  public get serverIdleTimeout() {
    return this.getNumberAttribute('server_idle_timeout');
  }
  public set serverIdleTimeout(value: number) {
    this._serverIdleTimeout = value;
  }
  public resetServerIdleTimeout() {
    this._serverIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdleTimeoutInput() {
    return this._serverIdleTimeout;
  }

  // server_lifetime - computed: true, optional: true, required: false
  private _serverLifetime?: number; 
  public get serverLifetime() {
    return this.getNumberAttribute('server_lifetime');
  }
  public set serverLifetime(value: number) {
    this._serverLifetime = value;
  }
  public resetServerLifetime() {
    this._serverLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLifetimeInput() {
    return this._serverLifetime;
  }

  // server_reset_query_always - computed: true, optional: true, required: false
  private _serverResetQueryAlways?: boolean | cdktf.IResolvable; 
  public get serverResetQueryAlways() {
    return this.getBooleanAttribute('server_reset_query_always');
  }
  public set serverResetQueryAlways(value: boolean | cdktf.IResolvable) {
    this._serverResetQueryAlways = value;
  }
  public resetServerResetQueryAlways() {
    this._serverResetQueryAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResetQueryAlwaysInput() {
    return this._serverResetQueryAlways;
  }
}
export interface ManagedDatabasePostgresqlPropertiesPglookout {
  /**
  * max_failover_replication_time_lag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}
  */
  readonly maxFailoverReplicationTimeLag?: number;
}

export function managedDatabasePostgresqlPropertiesPglookoutToTerraform(struct?: ManagedDatabasePostgresqlPropertiesPglookoutOutputReference | ManagedDatabasePostgresqlPropertiesPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_failover_replication_time_lag: cdktf.numberToTerraform(struct!.maxFailoverReplicationTimeLag),
  }
}

export class ManagedDatabasePostgresqlPropertiesPglookoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesPglookout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFailoverReplicationTimeLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailoverReplicationTimeLag = this._maxFailoverReplicationTimeLag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesPglookout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFailoverReplicationTimeLag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFailoverReplicationTimeLag = value.maxFailoverReplicationTimeLag;
    }
  }

  // max_failover_replication_time_lag - computed: false, optional: true, required: false
  private _maxFailoverReplicationTimeLag?: number; 
  public get maxFailoverReplicationTimeLag() {
    return this.getNumberAttribute('max_failover_replication_time_lag');
  }
  public set maxFailoverReplicationTimeLag(value: number) {
    this._maxFailoverReplicationTimeLag = value;
  }
  public resetMaxFailoverReplicationTimeLag() {
    this._maxFailoverReplicationTimeLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailoverReplicationTimeLagInput() {
    return this._maxFailoverReplicationTimeLag;
  }
}
export interface ManagedDatabasePostgresqlPropertiesTimescaledb {
  /**
  * timescaledb.max_background_workers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}
  */
  readonly maxBackgroundWorkers?: number;
}

export function managedDatabasePostgresqlPropertiesTimescaledbToTerraform(struct?: ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference | ManagedDatabasePostgresqlPropertiesTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_background_workers: cdktf.numberToTerraform(struct!.maxBackgroundWorkers),
  }
}

export class ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlPropertiesTimescaledb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBackgroundWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackgroundWorkers = this._maxBackgroundWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlPropertiesTimescaledb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBackgroundWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBackgroundWorkers = value.maxBackgroundWorkers;
    }
  }

  // max_background_workers - computed: true, optional: true, required: false
  private _maxBackgroundWorkers?: number; 
  public get maxBackgroundWorkers() {
    return this.getNumberAttribute('max_background_workers');
  }
  public set maxBackgroundWorkers(value: number) {
    this._maxBackgroundWorkers = value;
  }
  public resetMaxBackgroundWorkers() {
    this._maxBackgroundWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackgroundWorkersInput() {
    return this._maxBackgroundWorkers;
  }
}
export interface ManagedDatabasePostgresqlProperties {
  /**
  * Custom password for admin user. Defaults to random string. This must be set only when a new service is being created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Custom username for admin user. This must be set only when a new service is being created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Automatic utility network IP Filter
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}
  */
  readonly automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable;
  /**
  * autovacuum_analyze_scale_factor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}
  */
  readonly autovacuumAnalyzeScaleFactor?: number;
  /**
  * autovacuum_analyze_threshold
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}
  */
  readonly autovacuumAnalyzeThreshold?: number;
  /**
  * autovacuum_freeze_max_age
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}
  */
  readonly autovacuumFreezeMaxAge?: number;
  /**
  * autovacuum_max_workers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}
  */
  readonly autovacuumMaxWorkers?: number;
  /**
  * autovacuum_naptime
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}
  */
  readonly autovacuumNaptime?: number;
  /**
  * autovacuum_vacuum_cost_delay
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}
  */
  readonly autovacuumVacuumCostDelay?: number;
  /**
  * autovacuum_vacuum_cost_limit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}
  */
  readonly autovacuumVacuumCostLimit?: number;
  /**
  * autovacuum_vacuum_scale_factor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}
  */
  readonly autovacuumVacuumScaleFactor?: number;
  /**
  * autovacuum_vacuum_threshold
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}
  */
  readonly autovacuumVacuumThreshold?: number;
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * bgwriter_delay
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}
  */
  readonly bgwriterDelay?: number;
  /**
  * bgwriter_flush_after
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}
  */
  readonly bgwriterFlushAfter?: number;
  /**
  * bgwriter_lru_maxpages
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}
  */
  readonly bgwriterLruMaxpages?: number;
  /**
  * bgwriter_lru_multiplier
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}
  */
  readonly bgwriterLruMultiplier?: number;
  /**
  * deadlock_timeout
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}
  */
  readonly deadlockTimeout?: number;
  /**
  * idle_in_transaction_session_timeout
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}
  */
  readonly idleInTransactionSessionTimeout?: number;
  /**
  * IP filter
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * jit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}
  */
  readonly jit?: boolean | cdktf.IResolvable;
  /**
  * log_autovacuum_min_duration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}
  */
  readonly logAutovacuumMinDuration?: number;
  /**
  * log_error_verbosity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}
  */
  readonly logErrorVerbosity?: string;
  /**
  * log_line_prefix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}
  */
  readonly logLinePrefix?: string;
  /**
  * log_min_duration_statement
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}
  */
  readonly logMinDurationStatement?: number;
  /**
  * max_files_per_process
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}
  */
  readonly maxFilesPerProcess?: number;
  /**
  * max_locks_per_transaction
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}
  */
  readonly maxLocksPerTransaction?: number;
  /**
  * max_logical_replication_workers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}
  */
  readonly maxLogicalReplicationWorkers?: number;
  /**
  * max_parallel_workers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}
  */
  readonly maxParallelWorkers?: number;
  /**
  * max_parallel_workers_per_gather
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}
  */
  readonly maxParallelWorkersPerGather?: number;
  /**
  * max_pred_locks_per_transaction
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}
  */
  readonly maxPredLocksPerTransaction?: number;
  /**
  * max_prepared_transactions
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}
  */
  readonly maxPreparedTransactions?: number;
  /**
  * max_replication_slots
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}
  */
  readonly maxReplicationSlots?: number;
  /**
  * max_stack_depth
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}
  */
  readonly maxStackDepth?: number;
  /**
  * max_standby_archive_delay
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}
  */
  readonly maxStandbyArchiveDelay?: number;
  /**
  * max_standby_streaming_delay
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}
  */
  readonly maxStandbyStreamingDelay?: number;
  /**
  * max_wal_senders
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}
  */
  readonly maxWalSenders?: number;
  /**
  * max_worker_processes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}
  */
  readonly maxWorkerProcesses?: number;
  /**
  * pg_partman_bgw.interval
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}
  */
  readonly pgPartmanBgwInterval?: number;
  /**
  * pg_partman_bgw.role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}
  */
  readonly pgPartmanBgwRole?: string;
  /**
  * Should the service which is being forked be a read replica
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#pg_read_replica ManagedDatabasePostgresql#pg_read_replica}
  */
  readonly pgReadReplica?: boolean | cdktf.IResolvable;
  /**
  * Name of the PG Service from which to fork (deprecated, use service_to_fork_from). This has effect only when a new service is being created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#pg_service_to_fork_from ManagedDatabasePostgresql#pg_service_to_fork_from}
  */
  readonly pgServiceToForkFrom?: string;
  /**
  * pg_stat_statements.track
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}
  */
  readonly pgStatStatementsTrack?: string;
  /**
  * Public Access
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * shared_buffers_percentage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}
  */
  readonly sharedBuffersPercentage?: number;
  /**
  * Synchronous replication type. Note that the service plan also needs to support synchronous replication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}
  */
  readonly synchronousReplication?: string;
  /**
  * temp_file_limit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}
  */
  readonly tempFileLimit?: number;
  /**
  * timezone
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}
  */
  readonly timezone?: string;
  /**
  * track_activity_query_size
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}
  */
  readonly trackActivityQuerySize?: number;
  /**
  * track_commit_timestamp
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}
  */
  readonly trackCommitTimestamp?: string;
  /**
  * track_functions
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}
  */
  readonly trackFunctions?: string;
  /**
  * track_io_timing
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}
  */
  readonly trackIoTiming?: string;
  /**
  * Variant of the PostgreSQL service, may affect the features that are exposed by default
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}
  */
  readonly variant?: string;
  /**
  * PostgreSQL major version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#version ManagedDatabasePostgresql#version}
  */
  readonly version?: string;
  /**
  * wal_sender_timeout
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}
  */
  readonly walSenderTimeout?: number;
  /**
  * wal_writer_delay
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}
  */
  readonly walWriterDelay?: number;
  /**
  * work_mem
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}
  */
  readonly workMem?: number;
  /**
  * migration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}
  */
  readonly migration?: ManagedDatabasePostgresqlPropertiesMigration;
  /**
  * pgbouncer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}
  */
  readonly pgbouncer?: ManagedDatabasePostgresqlPropertiesPgbouncer;
  /**
  * pglookout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}
  */
  readonly pglookout?: ManagedDatabasePostgresqlPropertiesPglookout;
  /**
  * timescaledb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}
  */
  readonly timescaledb?: ManagedDatabasePostgresqlPropertiesTimescaledb;
}

export function managedDatabasePostgresqlPropertiesToTerraform(struct?: ManagedDatabasePostgresqlPropertiesOutputReference | ManagedDatabasePostgresqlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    automatic_utility_network_ip_filter: cdktf.booleanToTerraform(struct!.automaticUtilityNetworkIpFilter),
    autovacuum_analyze_scale_factor: cdktf.numberToTerraform(struct!.autovacuumAnalyzeScaleFactor),
    autovacuum_analyze_threshold: cdktf.numberToTerraform(struct!.autovacuumAnalyzeThreshold),
    autovacuum_freeze_max_age: cdktf.numberToTerraform(struct!.autovacuumFreezeMaxAge),
    autovacuum_max_workers: cdktf.numberToTerraform(struct!.autovacuumMaxWorkers),
    autovacuum_naptime: cdktf.numberToTerraform(struct!.autovacuumNaptime),
    autovacuum_vacuum_cost_delay: cdktf.numberToTerraform(struct!.autovacuumVacuumCostDelay),
    autovacuum_vacuum_cost_limit: cdktf.numberToTerraform(struct!.autovacuumVacuumCostLimit),
    autovacuum_vacuum_scale_factor: cdktf.numberToTerraform(struct!.autovacuumVacuumScaleFactor),
    autovacuum_vacuum_threshold: cdktf.numberToTerraform(struct!.autovacuumVacuumThreshold),
    backup_hour: cdktf.numberToTerraform(struct!.backupHour),
    backup_minute: cdktf.numberToTerraform(struct!.backupMinute),
    bgwriter_delay: cdktf.numberToTerraform(struct!.bgwriterDelay),
    bgwriter_flush_after: cdktf.numberToTerraform(struct!.bgwriterFlushAfter),
    bgwriter_lru_maxpages: cdktf.numberToTerraform(struct!.bgwriterLruMaxpages),
    bgwriter_lru_multiplier: cdktf.numberToTerraform(struct!.bgwriterLruMultiplier),
    deadlock_timeout: cdktf.numberToTerraform(struct!.deadlockTimeout),
    idle_in_transaction_session_timeout: cdktf.numberToTerraform(struct!.idleInTransactionSessionTimeout),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipFilter),
    jit: cdktf.booleanToTerraform(struct!.jit),
    log_autovacuum_min_duration: cdktf.numberToTerraform(struct!.logAutovacuumMinDuration),
    log_error_verbosity: cdktf.stringToTerraform(struct!.logErrorVerbosity),
    log_line_prefix: cdktf.stringToTerraform(struct!.logLinePrefix),
    log_min_duration_statement: cdktf.numberToTerraform(struct!.logMinDurationStatement),
    max_files_per_process: cdktf.numberToTerraform(struct!.maxFilesPerProcess),
    max_locks_per_transaction: cdktf.numberToTerraform(struct!.maxLocksPerTransaction),
    max_logical_replication_workers: cdktf.numberToTerraform(struct!.maxLogicalReplicationWorkers),
    max_parallel_workers: cdktf.numberToTerraform(struct!.maxParallelWorkers),
    max_parallel_workers_per_gather: cdktf.numberToTerraform(struct!.maxParallelWorkersPerGather),
    max_pred_locks_per_transaction: cdktf.numberToTerraform(struct!.maxPredLocksPerTransaction),
    max_prepared_transactions: cdktf.numberToTerraform(struct!.maxPreparedTransactions),
    max_replication_slots: cdktf.numberToTerraform(struct!.maxReplicationSlots),
    max_stack_depth: cdktf.numberToTerraform(struct!.maxStackDepth),
    max_standby_archive_delay: cdktf.numberToTerraform(struct!.maxStandbyArchiveDelay),
    max_standby_streaming_delay: cdktf.numberToTerraform(struct!.maxStandbyStreamingDelay),
    max_wal_senders: cdktf.numberToTerraform(struct!.maxWalSenders),
    max_worker_processes: cdktf.numberToTerraform(struct!.maxWorkerProcesses),
    pg_partman_bgw_interval: cdktf.numberToTerraform(struct!.pgPartmanBgwInterval),
    pg_partman_bgw_role: cdktf.stringToTerraform(struct!.pgPartmanBgwRole),
    pg_read_replica: cdktf.booleanToTerraform(struct!.pgReadReplica),
    pg_service_to_fork_from: cdktf.stringToTerraform(struct!.pgServiceToForkFrom),
    pg_stat_statements_track: cdktf.stringToTerraform(struct!.pgStatStatementsTrack),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    shared_buffers_percentage: cdktf.numberToTerraform(struct!.sharedBuffersPercentage),
    synchronous_replication: cdktf.stringToTerraform(struct!.synchronousReplication),
    temp_file_limit: cdktf.numberToTerraform(struct!.tempFileLimit),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    track_activity_query_size: cdktf.numberToTerraform(struct!.trackActivityQuerySize),
    track_commit_timestamp: cdktf.stringToTerraform(struct!.trackCommitTimestamp),
    track_functions: cdktf.stringToTerraform(struct!.trackFunctions),
    track_io_timing: cdktf.stringToTerraform(struct!.trackIoTiming),
    variant: cdktf.stringToTerraform(struct!.variant),
    version: cdktf.stringToTerraform(struct!.version),
    wal_sender_timeout: cdktf.numberToTerraform(struct!.walSenderTimeout),
    wal_writer_delay: cdktf.numberToTerraform(struct!.walWriterDelay),
    work_mem: cdktf.numberToTerraform(struct!.workMem),
    migration: managedDatabasePostgresqlPropertiesMigrationToTerraform(struct!.migration),
    pgbouncer: managedDatabasePostgresqlPropertiesPgbouncerToTerraform(struct!.pgbouncer),
    pglookout: managedDatabasePostgresqlPropertiesPglookoutToTerraform(struct!.pglookout),
    timescaledb: managedDatabasePostgresqlPropertiesTimescaledbToTerraform(struct!.timescaledb),
  }
}

export class ManagedDatabasePostgresqlPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDatabasePostgresqlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._automaticUtilityNetworkIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUtilityNetworkIpFilter = this._automaticUtilityNetworkIpFilter;
    }
    if (this._autovacuumAnalyzeScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumAnalyzeScaleFactor = this._autovacuumAnalyzeScaleFactor;
    }
    if (this._autovacuumAnalyzeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumAnalyzeThreshold = this._autovacuumAnalyzeThreshold;
    }
    if (this._autovacuumFreezeMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumFreezeMaxAge = this._autovacuumFreezeMaxAge;
    }
    if (this._autovacuumMaxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumMaxWorkers = this._autovacuumMaxWorkers;
    }
    if (this._autovacuumNaptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumNaptime = this._autovacuumNaptime;
    }
    if (this._autovacuumVacuumCostDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumCostDelay = this._autovacuumVacuumCostDelay;
    }
    if (this._autovacuumVacuumCostLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumCostLimit = this._autovacuumVacuumCostLimit;
    }
    if (this._autovacuumVacuumScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumScaleFactor = this._autovacuumVacuumScaleFactor;
    }
    if (this._autovacuumVacuumThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumThreshold = this._autovacuumVacuumThreshold;
    }
    if (this._backupHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupHour = this._backupHour;
    }
    if (this._backupMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinute = this._backupMinute;
    }
    if (this._bgwriterDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterDelay = this._bgwriterDelay;
    }
    if (this._bgwriterFlushAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterFlushAfter = this._bgwriterFlushAfter;
    }
    if (this._bgwriterLruMaxpages !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterLruMaxpages = this._bgwriterLruMaxpages;
    }
    if (this._bgwriterLruMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterLruMultiplier = this._bgwriterLruMultiplier;
    }
    if (this._deadlockTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadlockTimeout = this._deadlockTimeout;
    }
    if (this._idleInTransactionSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInTransactionSessionTimeout = this._idleInTransactionSessionTimeout;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._jit !== undefined) {
      hasAnyValues = true;
      internalValueResult.jit = this._jit;
    }
    if (this._logAutovacuumMinDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAutovacuumMinDuration = this._logAutovacuumMinDuration;
    }
    if (this._logErrorVerbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.logErrorVerbosity = this._logErrorVerbosity;
    }
    if (this._logLinePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLinePrefix = this._logLinePrefix;
    }
    if (this._logMinDurationStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMinDurationStatement = this._logMinDurationStatement;
    }
    if (this._maxFilesPerProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilesPerProcess = this._maxFilesPerProcess;
    }
    if (this._maxLocksPerTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLocksPerTransaction = this._maxLocksPerTransaction;
    }
    if (this._maxLogicalReplicationWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLogicalReplicationWorkers = this._maxLogicalReplicationWorkers;
    }
    if (this._maxParallelWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelWorkers = this._maxParallelWorkers;
    }
    if (this._maxParallelWorkersPerGather !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelWorkersPerGather = this._maxParallelWorkersPerGather;
    }
    if (this._maxPredLocksPerTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPredLocksPerTransaction = this._maxPredLocksPerTransaction;
    }
    if (this._maxPreparedTransactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedTransactions = this._maxPreparedTransactions;
    }
    if (this._maxReplicationSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicationSlots = this._maxReplicationSlots;
    }
    if (this._maxStackDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStackDepth = this._maxStackDepth;
    }
    if (this._maxStandbyArchiveDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStandbyArchiveDelay = this._maxStandbyArchiveDelay;
    }
    if (this._maxStandbyStreamingDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStandbyStreamingDelay = this._maxStandbyStreamingDelay;
    }
    if (this._maxWalSenders !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWalSenders = this._maxWalSenders;
    }
    if (this._maxWorkerProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerProcesses = this._maxWorkerProcesses;
    }
    if (this._pgPartmanBgwInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgPartmanBgwInterval = this._pgPartmanBgwInterval;
    }
    if (this._pgPartmanBgwRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgPartmanBgwRole = this._pgPartmanBgwRole;
    }
    if (this._pgReadReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgReadReplica = this._pgReadReplica;
    }
    if (this._pgServiceToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgServiceToForkFrom = this._pgServiceToForkFrom;
    }
    if (this._pgStatStatementsTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatStatementsTrack = this._pgStatStatementsTrack;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._sharedBuffersPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedBuffersPercentage = this._sharedBuffersPercentage;
    }
    if (this._synchronousReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronousReplication = this._synchronousReplication;
    }
    if (this._tempFileLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempFileLimit = this._tempFileLimit;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._trackActivityQuerySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackActivityQuerySize = this._trackActivityQuerySize;
    }
    if (this._trackCommitTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackCommitTimestamp = this._trackCommitTimestamp;
    }
    if (this._trackFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackFunctions = this._trackFunctions;
    }
    if (this._trackIoTiming !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackIoTiming = this._trackIoTiming;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._walSenderTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.walSenderTimeout = this._walSenderTimeout;
    }
    if (this._walWriterDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.walWriterDelay = this._walWriterDelay;
    }
    if (this._workMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.workMem = this._workMem;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    if (this._pgbouncer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgbouncer = this._pgbouncer?.internalValue;
    }
    if (this._pglookout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pglookout = this._pglookout?.internalValue;
    }
    if (this._timescaledb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timescaledb = this._timescaledb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedDatabasePostgresqlProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._automaticUtilityNetworkIpFilter = undefined;
      this._autovacuumAnalyzeScaleFactor = undefined;
      this._autovacuumAnalyzeThreshold = undefined;
      this._autovacuumFreezeMaxAge = undefined;
      this._autovacuumMaxWorkers = undefined;
      this._autovacuumNaptime = undefined;
      this._autovacuumVacuumCostDelay = undefined;
      this._autovacuumVacuumCostLimit = undefined;
      this._autovacuumVacuumScaleFactor = undefined;
      this._autovacuumVacuumThreshold = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._bgwriterDelay = undefined;
      this._bgwriterFlushAfter = undefined;
      this._bgwriterLruMaxpages = undefined;
      this._bgwriterLruMultiplier = undefined;
      this._deadlockTimeout = undefined;
      this._idleInTransactionSessionTimeout = undefined;
      this._ipFilter = undefined;
      this._jit = undefined;
      this._logAutovacuumMinDuration = undefined;
      this._logErrorVerbosity = undefined;
      this._logLinePrefix = undefined;
      this._logMinDurationStatement = undefined;
      this._maxFilesPerProcess = undefined;
      this._maxLocksPerTransaction = undefined;
      this._maxLogicalReplicationWorkers = undefined;
      this._maxParallelWorkers = undefined;
      this._maxParallelWorkersPerGather = undefined;
      this._maxPredLocksPerTransaction = undefined;
      this._maxPreparedTransactions = undefined;
      this._maxReplicationSlots = undefined;
      this._maxStackDepth = undefined;
      this._maxStandbyArchiveDelay = undefined;
      this._maxStandbyStreamingDelay = undefined;
      this._maxWalSenders = undefined;
      this._maxWorkerProcesses = undefined;
      this._pgPartmanBgwInterval = undefined;
      this._pgPartmanBgwRole = undefined;
      this._pgReadReplica = undefined;
      this._pgServiceToForkFrom = undefined;
      this._pgStatStatementsTrack = undefined;
      this._publicAccess = undefined;
      this._sharedBuffersPercentage = undefined;
      this._synchronousReplication = undefined;
      this._tempFileLimit = undefined;
      this._timezone = undefined;
      this._trackActivityQuerySize = undefined;
      this._trackCommitTimestamp = undefined;
      this._trackFunctions = undefined;
      this._trackIoTiming = undefined;
      this._variant = undefined;
      this._version = undefined;
      this._walSenderTimeout = undefined;
      this._walWriterDelay = undefined;
      this._workMem = undefined;
      this._migration.internalValue = undefined;
      this._pgbouncer.internalValue = undefined;
      this._pglookout.internalValue = undefined;
      this._timescaledb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._automaticUtilityNetworkIpFilter = value.automaticUtilityNetworkIpFilter;
      this._autovacuumAnalyzeScaleFactor = value.autovacuumAnalyzeScaleFactor;
      this._autovacuumAnalyzeThreshold = value.autovacuumAnalyzeThreshold;
      this._autovacuumFreezeMaxAge = value.autovacuumFreezeMaxAge;
      this._autovacuumMaxWorkers = value.autovacuumMaxWorkers;
      this._autovacuumNaptime = value.autovacuumNaptime;
      this._autovacuumVacuumCostDelay = value.autovacuumVacuumCostDelay;
      this._autovacuumVacuumCostLimit = value.autovacuumVacuumCostLimit;
      this._autovacuumVacuumScaleFactor = value.autovacuumVacuumScaleFactor;
      this._autovacuumVacuumThreshold = value.autovacuumVacuumThreshold;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._bgwriterDelay = value.bgwriterDelay;
      this._bgwriterFlushAfter = value.bgwriterFlushAfter;
      this._bgwriterLruMaxpages = value.bgwriterLruMaxpages;
      this._bgwriterLruMultiplier = value.bgwriterLruMultiplier;
      this._deadlockTimeout = value.deadlockTimeout;
      this._idleInTransactionSessionTimeout = value.idleInTransactionSessionTimeout;
      this._ipFilter = value.ipFilter;
      this._jit = value.jit;
      this._logAutovacuumMinDuration = value.logAutovacuumMinDuration;
      this._logErrorVerbosity = value.logErrorVerbosity;
      this._logLinePrefix = value.logLinePrefix;
      this._logMinDurationStatement = value.logMinDurationStatement;
      this._maxFilesPerProcess = value.maxFilesPerProcess;
      this._maxLocksPerTransaction = value.maxLocksPerTransaction;
      this._maxLogicalReplicationWorkers = value.maxLogicalReplicationWorkers;
      this._maxParallelWorkers = value.maxParallelWorkers;
      this._maxParallelWorkersPerGather = value.maxParallelWorkersPerGather;
      this._maxPredLocksPerTransaction = value.maxPredLocksPerTransaction;
      this._maxPreparedTransactions = value.maxPreparedTransactions;
      this._maxReplicationSlots = value.maxReplicationSlots;
      this._maxStackDepth = value.maxStackDepth;
      this._maxStandbyArchiveDelay = value.maxStandbyArchiveDelay;
      this._maxStandbyStreamingDelay = value.maxStandbyStreamingDelay;
      this._maxWalSenders = value.maxWalSenders;
      this._maxWorkerProcesses = value.maxWorkerProcesses;
      this._pgPartmanBgwInterval = value.pgPartmanBgwInterval;
      this._pgPartmanBgwRole = value.pgPartmanBgwRole;
      this._pgReadReplica = value.pgReadReplica;
      this._pgServiceToForkFrom = value.pgServiceToForkFrom;
      this._pgStatStatementsTrack = value.pgStatStatementsTrack;
      this._publicAccess = value.publicAccess;
      this._sharedBuffersPercentage = value.sharedBuffersPercentage;
      this._synchronousReplication = value.synchronousReplication;
      this._tempFileLimit = value.tempFileLimit;
      this._timezone = value.timezone;
      this._trackActivityQuerySize = value.trackActivityQuerySize;
      this._trackCommitTimestamp = value.trackCommitTimestamp;
      this._trackFunctions = value.trackFunctions;
      this._trackIoTiming = value.trackIoTiming;
      this._variant = value.variant;
      this._version = value.version;
      this._walSenderTimeout = value.walSenderTimeout;
      this._walWriterDelay = value.walWriterDelay;
      this._workMem = value.workMem;
      this._migration.internalValue = value.migration;
      this._pgbouncer.internalValue = value.pgbouncer;
      this._pglookout.internalValue = value.pglookout;
      this._timescaledb.internalValue = value.timescaledb;
    }
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: true, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // automatic_utility_network_ip_filter - computed: false, optional: true, required: false
  private _automaticUtilityNetworkIpFilter?: boolean | cdktf.IResolvable; 
  public get automaticUtilityNetworkIpFilter() {
    return this.getBooleanAttribute('automatic_utility_network_ip_filter');
  }
  public set automaticUtilityNetworkIpFilter(value: boolean | cdktf.IResolvable) {
    this._automaticUtilityNetworkIpFilter = value;
  }
  public resetAutomaticUtilityNetworkIpFilter() {
    this._automaticUtilityNetworkIpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUtilityNetworkIpFilterInput() {
    return this._automaticUtilityNetworkIpFilter;
  }

  // autovacuum_analyze_scale_factor - computed: true, optional: true, required: false
  private _autovacuumAnalyzeScaleFactor?: number; 
  public get autovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('autovacuum_analyze_scale_factor');
  }
  public set autovacuumAnalyzeScaleFactor(value: number) {
    this._autovacuumAnalyzeScaleFactor = value;
  }
  public resetAutovacuumAnalyzeScaleFactor() {
    this._autovacuumAnalyzeScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeScaleFactorInput() {
    return this._autovacuumAnalyzeScaleFactor;
  }

  // autovacuum_analyze_threshold - computed: true, optional: true, required: false
  private _autovacuumAnalyzeThreshold?: number; 
  public get autovacuumAnalyzeThreshold() {
    return this.getNumberAttribute('autovacuum_analyze_threshold');
  }
  public set autovacuumAnalyzeThreshold(value: number) {
    this._autovacuumAnalyzeThreshold = value;
  }
  public resetAutovacuumAnalyzeThreshold() {
    this._autovacuumAnalyzeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeThresholdInput() {
    return this._autovacuumAnalyzeThreshold;
  }

  // autovacuum_freeze_max_age - computed: true, optional: true, required: false
  private _autovacuumFreezeMaxAge?: number; 
  public get autovacuumFreezeMaxAge() {
    return this.getNumberAttribute('autovacuum_freeze_max_age');
  }
  public set autovacuumFreezeMaxAge(value: number) {
    this._autovacuumFreezeMaxAge = value;
  }
  public resetAutovacuumFreezeMaxAge() {
    this._autovacuumFreezeMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumFreezeMaxAgeInput() {
    return this._autovacuumFreezeMaxAge;
  }

  // autovacuum_max_workers - computed: true, optional: true, required: false
  private _autovacuumMaxWorkers?: number; 
  public get autovacuumMaxWorkers() {
    return this.getNumberAttribute('autovacuum_max_workers');
  }
  public set autovacuumMaxWorkers(value: number) {
    this._autovacuumMaxWorkers = value;
  }
  public resetAutovacuumMaxWorkers() {
    this._autovacuumMaxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumMaxWorkersInput() {
    return this._autovacuumMaxWorkers;
  }

  // autovacuum_naptime - computed: true, optional: true, required: false
  private _autovacuumNaptime?: number; 
  public get autovacuumNaptime() {
    return this.getNumberAttribute('autovacuum_naptime');
  }
  public set autovacuumNaptime(value: number) {
    this._autovacuumNaptime = value;
  }
  public resetAutovacuumNaptime() {
    this._autovacuumNaptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumNaptimeInput() {
    return this._autovacuumNaptime;
  }

  // autovacuum_vacuum_cost_delay - computed: true, optional: true, required: false
  private _autovacuumVacuumCostDelay?: number; 
  public get autovacuumVacuumCostDelay() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_delay');
  }
  public set autovacuumVacuumCostDelay(value: number) {
    this._autovacuumVacuumCostDelay = value;
  }
  public resetAutovacuumVacuumCostDelay() {
    this._autovacuumVacuumCostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostDelayInput() {
    return this._autovacuumVacuumCostDelay;
  }

  // autovacuum_vacuum_cost_limit - computed: true, optional: true, required: false
  private _autovacuumVacuumCostLimit?: number; 
  public get autovacuumVacuumCostLimit() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_limit');
  }
  public set autovacuumVacuumCostLimit(value: number) {
    this._autovacuumVacuumCostLimit = value;
  }
  public resetAutovacuumVacuumCostLimit() {
    this._autovacuumVacuumCostLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostLimitInput() {
    return this._autovacuumVacuumCostLimit;
  }

  // autovacuum_vacuum_scale_factor - computed: true, optional: true, required: false
  private _autovacuumVacuumScaleFactor?: number; 
  public get autovacuumVacuumScaleFactor() {
    return this.getNumberAttribute('autovacuum_vacuum_scale_factor');
  }
  public set autovacuumVacuumScaleFactor(value: number) {
    this._autovacuumVacuumScaleFactor = value;
  }
  public resetAutovacuumVacuumScaleFactor() {
    this._autovacuumVacuumScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumScaleFactorInput() {
    return this._autovacuumVacuumScaleFactor;
  }

  // autovacuum_vacuum_threshold - computed: true, optional: true, required: false
  private _autovacuumVacuumThreshold?: number; 
  public get autovacuumVacuumThreshold() {
    return this.getNumberAttribute('autovacuum_vacuum_threshold');
  }
  public set autovacuumVacuumThreshold(value: number) {
    this._autovacuumVacuumThreshold = value;
  }
  public resetAutovacuumVacuumThreshold() {
    this._autovacuumVacuumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumThresholdInput() {
    return this._autovacuumVacuumThreshold;
  }

  // backup_hour - computed: true, optional: true, required: false
  private _backupHour?: number; 
  public get backupHour() {
    return this.getNumberAttribute('backup_hour');
  }
  public set backupHour(value: number) {
    this._backupHour = value;
  }
  public resetBackupHour() {
    this._backupHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHourInput() {
    return this._backupHour;
  }

  // backup_minute - computed: true, optional: true, required: false
  private _backupMinute?: number; 
  public get backupMinute() {
    return this.getNumberAttribute('backup_minute');
  }
  public set backupMinute(value: number) {
    this._backupMinute = value;
  }
  public resetBackupMinute() {
    this._backupMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinuteInput() {
    return this._backupMinute;
  }

  // bgwriter_delay - computed: true, optional: true, required: false
  private _bgwriterDelay?: number; 
  public get bgwriterDelay() {
    return this.getNumberAttribute('bgwriter_delay');
  }
  public set bgwriterDelay(value: number) {
    this._bgwriterDelay = value;
  }
  public resetBgwriterDelay() {
    this._bgwriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterDelayInput() {
    return this._bgwriterDelay;
  }

  // bgwriter_flush_after - computed: true, optional: true, required: false
  private _bgwriterFlushAfter?: number; 
  public get bgwriterFlushAfter() {
    return this.getNumberAttribute('bgwriter_flush_after');
  }
  public set bgwriterFlushAfter(value: number) {
    this._bgwriterFlushAfter = value;
  }
  public resetBgwriterFlushAfter() {
    this._bgwriterFlushAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterFlushAfterInput() {
    return this._bgwriterFlushAfter;
  }

  // bgwriter_lru_maxpages - computed: true, optional: true, required: false
  private _bgwriterLruMaxpages?: number; 
  public get bgwriterLruMaxpages() {
    return this.getNumberAttribute('bgwriter_lru_maxpages');
  }
  public set bgwriterLruMaxpages(value: number) {
    this._bgwriterLruMaxpages = value;
  }
  public resetBgwriterLruMaxpages() {
    this._bgwriterLruMaxpages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMaxpagesInput() {
    return this._bgwriterLruMaxpages;
  }

  // bgwriter_lru_multiplier - computed: true, optional: true, required: false
  private _bgwriterLruMultiplier?: number; 
  public get bgwriterLruMultiplier() {
    return this.getNumberAttribute('bgwriter_lru_multiplier');
  }
  public set bgwriterLruMultiplier(value: number) {
    this._bgwriterLruMultiplier = value;
  }
  public resetBgwriterLruMultiplier() {
    this._bgwriterLruMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMultiplierInput() {
    return this._bgwriterLruMultiplier;
  }

  // deadlock_timeout - computed: true, optional: true, required: false
  private _deadlockTimeout?: number; 
  public get deadlockTimeout() {
    return this.getNumberAttribute('deadlock_timeout');
  }
  public set deadlockTimeout(value: number) {
    this._deadlockTimeout = value;
  }
  public resetDeadlockTimeout() {
    this._deadlockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlockTimeoutInput() {
    return this._deadlockTimeout;
  }

  // idle_in_transaction_session_timeout - computed: true, optional: true, required: false
  private _idleInTransactionSessionTimeout?: number; 
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }
  public set idleInTransactionSessionTimeout(value: number) {
    this._idleInTransactionSessionTimeout = value;
  }
  public resetIdleInTransactionSessionTimeout() {
    this._idleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionSessionTimeoutInput() {
    return this._idleInTransactionSessionTimeout;
  }

  // ip_filter - computed: true, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return this.getListAttribute('ip_filter');
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // jit - computed: true, optional: true, required: false
  private _jit?: boolean | cdktf.IResolvable; 
  public get jit() {
    return this.getBooleanAttribute('jit');
  }
  public set jit(value: boolean | cdktf.IResolvable) {
    this._jit = value;
  }
  public resetJit() {
    this._jit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitInput() {
    return this._jit;
  }

  // log_autovacuum_min_duration - computed: true, optional: true, required: false
  private _logAutovacuumMinDuration?: number; 
  public get logAutovacuumMinDuration() {
    return this.getNumberAttribute('log_autovacuum_min_duration');
  }
  public set logAutovacuumMinDuration(value: number) {
    this._logAutovacuumMinDuration = value;
  }
  public resetLogAutovacuumMinDuration() {
    this._logAutovacuumMinDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAutovacuumMinDurationInput() {
    return this._logAutovacuumMinDuration;
  }

  // log_error_verbosity - computed: true, optional: true, required: false
  private _logErrorVerbosity?: string; 
  public get logErrorVerbosity() {
    return this.getStringAttribute('log_error_verbosity');
  }
  public set logErrorVerbosity(value: string) {
    this._logErrorVerbosity = value;
  }
  public resetLogErrorVerbosity() {
    this._logErrorVerbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logErrorVerbosityInput() {
    return this._logErrorVerbosity;
  }

  // log_line_prefix - computed: true, optional: true, required: false
  private _logLinePrefix?: string; 
  public get logLinePrefix() {
    return this.getStringAttribute('log_line_prefix');
  }
  public set logLinePrefix(value: string) {
    this._logLinePrefix = value;
  }
  public resetLogLinePrefix() {
    this._logLinePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLinePrefixInput() {
    return this._logLinePrefix;
  }

  // log_min_duration_statement - computed: true, optional: true, required: false
  private _logMinDurationStatement?: number; 
  public get logMinDurationStatement() {
    return this.getNumberAttribute('log_min_duration_statement');
  }
  public set logMinDurationStatement(value: number) {
    this._logMinDurationStatement = value;
  }
  public resetLogMinDurationStatement() {
    this._logMinDurationStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMinDurationStatementInput() {
    return this._logMinDurationStatement;
  }

  // max_files_per_process - computed: true, optional: true, required: false
  private _maxFilesPerProcess?: number; 
  public get maxFilesPerProcess() {
    return this.getNumberAttribute('max_files_per_process');
  }
  public set maxFilesPerProcess(value: number) {
    this._maxFilesPerProcess = value;
  }
  public resetMaxFilesPerProcess() {
    this._maxFilesPerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesPerProcessInput() {
    return this._maxFilesPerProcess;
  }

  // max_locks_per_transaction - computed: true, optional: true, required: false
  private _maxLocksPerTransaction?: number; 
  public get maxLocksPerTransaction() {
    return this.getNumberAttribute('max_locks_per_transaction');
  }
  public set maxLocksPerTransaction(value: number) {
    this._maxLocksPerTransaction = value;
  }
  public resetMaxLocksPerTransaction() {
    this._maxLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLocksPerTransactionInput() {
    return this._maxLocksPerTransaction;
  }

  // max_logical_replication_workers - computed: true, optional: true, required: false
  private _maxLogicalReplicationWorkers?: number; 
  public get maxLogicalReplicationWorkers() {
    return this.getNumberAttribute('max_logical_replication_workers');
  }
  public set maxLogicalReplicationWorkers(value: number) {
    this._maxLogicalReplicationWorkers = value;
  }
  public resetMaxLogicalReplicationWorkers() {
    this._maxLogicalReplicationWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogicalReplicationWorkersInput() {
    return this._maxLogicalReplicationWorkers;
  }

  // max_parallel_workers - computed: true, optional: true, required: false
  private _maxParallelWorkers?: number; 
  public get maxParallelWorkers() {
    return this.getNumberAttribute('max_parallel_workers');
  }
  public set maxParallelWorkers(value: number) {
    this._maxParallelWorkers = value;
  }
  public resetMaxParallelWorkers() {
    this._maxParallelWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersInput() {
    return this._maxParallelWorkers;
  }

  // max_parallel_workers_per_gather - computed: true, optional: true, required: false
  private _maxParallelWorkersPerGather?: number; 
  public get maxParallelWorkersPerGather() {
    return this.getNumberAttribute('max_parallel_workers_per_gather');
  }
  public set maxParallelWorkersPerGather(value: number) {
    this._maxParallelWorkersPerGather = value;
  }
  public resetMaxParallelWorkersPerGather() {
    this._maxParallelWorkersPerGather = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersPerGatherInput() {
    return this._maxParallelWorkersPerGather;
  }

  // max_pred_locks_per_transaction - computed: true, optional: true, required: false
  private _maxPredLocksPerTransaction?: number; 
  public get maxPredLocksPerTransaction() {
    return this.getNumberAttribute('max_pred_locks_per_transaction');
  }
  public set maxPredLocksPerTransaction(value: number) {
    this._maxPredLocksPerTransaction = value;
  }
  public resetMaxPredLocksPerTransaction() {
    this._maxPredLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPredLocksPerTransactionInput() {
    return this._maxPredLocksPerTransaction;
  }

  // max_prepared_transactions - computed: true, optional: true, required: false
  private _maxPreparedTransactions?: number; 
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }
  public set maxPreparedTransactions(value: number) {
    this._maxPreparedTransactions = value;
  }
  public resetMaxPreparedTransactions() {
    this._maxPreparedTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedTransactionsInput() {
    return this._maxPreparedTransactions;
  }

  // max_replication_slots - computed: true, optional: true, required: false
  private _maxReplicationSlots?: number; 
  public get maxReplicationSlots() {
    return this.getNumberAttribute('max_replication_slots');
  }
  public set maxReplicationSlots(value: number) {
    this._maxReplicationSlots = value;
  }
  public resetMaxReplicationSlots() {
    this._maxReplicationSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicationSlotsInput() {
    return this._maxReplicationSlots;
  }

  // max_stack_depth - computed: true, optional: true, required: false
  private _maxStackDepth?: number; 
  public get maxStackDepth() {
    return this.getNumberAttribute('max_stack_depth');
  }
  public set maxStackDepth(value: number) {
    this._maxStackDepth = value;
  }
  public resetMaxStackDepth() {
    this._maxStackDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStackDepthInput() {
    return this._maxStackDepth;
  }

  // max_standby_archive_delay - computed: true, optional: true, required: false
  private _maxStandbyArchiveDelay?: number; 
  public get maxStandbyArchiveDelay() {
    return this.getNumberAttribute('max_standby_archive_delay');
  }
  public set maxStandbyArchiveDelay(value: number) {
    this._maxStandbyArchiveDelay = value;
  }
  public resetMaxStandbyArchiveDelay() {
    this._maxStandbyArchiveDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyArchiveDelayInput() {
    return this._maxStandbyArchiveDelay;
  }

  // max_standby_streaming_delay - computed: true, optional: true, required: false
  private _maxStandbyStreamingDelay?: number; 
  public get maxStandbyStreamingDelay() {
    return this.getNumberAttribute('max_standby_streaming_delay');
  }
  public set maxStandbyStreamingDelay(value: number) {
    this._maxStandbyStreamingDelay = value;
  }
  public resetMaxStandbyStreamingDelay() {
    this._maxStandbyStreamingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyStreamingDelayInput() {
    return this._maxStandbyStreamingDelay;
  }

  // max_wal_senders - computed: true, optional: true, required: false
  private _maxWalSenders?: number; 
  public get maxWalSenders() {
    return this.getNumberAttribute('max_wal_senders');
  }
  public set maxWalSenders(value: number) {
    this._maxWalSenders = value;
  }
  public resetMaxWalSenders() {
    this._maxWalSenders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWalSendersInput() {
    return this._maxWalSenders;
  }

  // max_worker_processes - computed: true, optional: true, required: false
  private _maxWorkerProcesses?: number; 
  public get maxWorkerProcesses() {
    return this.getNumberAttribute('max_worker_processes');
  }
  public set maxWorkerProcesses(value: number) {
    this._maxWorkerProcesses = value;
  }
  public resetMaxWorkerProcesses() {
    this._maxWorkerProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerProcessesInput() {
    return this._maxWorkerProcesses;
  }

  // pg_partman_bgw_interval - computed: true, optional: true, required: false
  private _pgPartmanBgwInterval?: number; 
  public get pgPartmanBgwInterval() {
    return this.getNumberAttribute('pg_partman_bgw_interval');
  }
  public set pgPartmanBgwInterval(value: number) {
    this._pgPartmanBgwInterval = value;
  }
  public resetPgPartmanBgwInterval() {
    this._pgPartmanBgwInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwIntervalInput() {
    return this._pgPartmanBgwInterval;
  }

  // pg_partman_bgw_role - computed: true, optional: true, required: false
  private _pgPartmanBgwRole?: string; 
  public get pgPartmanBgwRole() {
    return this.getStringAttribute('pg_partman_bgw_role');
  }
  public set pgPartmanBgwRole(value: string) {
    this._pgPartmanBgwRole = value;
  }
  public resetPgPartmanBgwRole() {
    this._pgPartmanBgwRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwRoleInput() {
    return this._pgPartmanBgwRole;
  }

  // pg_read_replica - computed: true, optional: true, required: false
  private _pgReadReplica?: boolean | cdktf.IResolvable; 
  public get pgReadReplica() {
    return this.getBooleanAttribute('pg_read_replica');
  }
  public set pgReadReplica(value: boolean | cdktf.IResolvable) {
    this._pgReadReplica = value;
  }
  public resetPgReadReplica() {
    this._pgReadReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgReadReplicaInput() {
    return this._pgReadReplica;
  }

  // pg_service_to_fork_from - computed: true, optional: true, required: false
  private _pgServiceToForkFrom?: string; 
  public get pgServiceToForkFrom() {
    return this.getStringAttribute('pg_service_to_fork_from');
  }
  public set pgServiceToForkFrom(value: string) {
    this._pgServiceToForkFrom = value;
  }
  public resetPgServiceToForkFrom() {
    this._pgServiceToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgServiceToForkFromInput() {
    return this._pgServiceToForkFrom;
  }

  // pg_stat_statements_track - computed: true, optional: true, required: false
  private _pgStatStatementsTrack?: string; 
  public get pgStatStatementsTrack() {
    return this.getStringAttribute('pg_stat_statements_track');
  }
  public set pgStatStatementsTrack(value: string) {
    this._pgStatStatementsTrack = value;
  }
  public resetPgStatStatementsTrack() {
    this._pgStatStatementsTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatStatementsTrackInput() {
    return this._pgStatStatementsTrack;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess?: boolean | cdktf.IResolvable; 
  public get publicAccess() {
    return this.getBooleanAttribute('public_access');
  }
  public set publicAccess(value: boolean | cdktf.IResolvable) {
    this._publicAccess = value;
  }
  public resetPublicAccess() {
    this._publicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess;
  }

  // shared_buffers_percentage - computed: true, optional: true, required: false
  private _sharedBuffersPercentage?: number; 
  public get sharedBuffersPercentage() {
    return this.getNumberAttribute('shared_buffers_percentage');
  }
  public set sharedBuffersPercentage(value: number) {
    this._sharedBuffersPercentage = value;
  }
  public resetSharedBuffersPercentage() {
    this._sharedBuffersPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBuffersPercentageInput() {
    return this._sharedBuffersPercentage;
  }

  // synchronous_replication - computed: true, optional: true, required: false
  private _synchronousReplication?: string; 
  public get synchronousReplication() {
    return this.getStringAttribute('synchronous_replication');
  }
  public set synchronousReplication(value: string) {
    this._synchronousReplication = value;
  }
  public resetSynchronousReplication() {
    this._synchronousReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousReplicationInput() {
    return this._synchronousReplication;
  }

  // temp_file_limit - computed: true, optional: true, required: false
  private _tempFileLimit?: number; 
  public get tempFileLimit() {
    return this.getNumberAttribute('temp_file_limit');
  }
  public set tempFileLimit(value: number) {
    this._tempFileLimit = value;
  }
  public resetTempFileLimit() {
    this._tempFileLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempFileLimitInput() {
    return this._tempFileLimit;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // track_activity_query_size - computed: true, optional: true, required: false
  private _trackActivityQuerySize?: number; 
  public get trackActivityQuerySize() {
    return this.getNumberAttribute('track_activity_query_size');
  }
  public set trackActivityQuerySize(value: number) {
    this._trackActivityQuerySize = value;
  }
  public resetTrackActivityQuerySize() {
    this._trackActivityQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActivityQuerySizeInput() {
    return this._trackActivityQuerySize;
  }

  // track_commit_timestamp - computed: true, optional: true, required: false
  private _trackCommitTimestamp?: string; 
  public get trackCommitTimestamp() {
    return this.getStringAttribute('track_commit_timestamp');
  }
  public set trackCommitTimestamp(value: string) {
    this._trackCommitTimestamp = value;
  }
  public resetTrackCommitTimestamp() {
    this._trackCommitTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackCommitTimestampInput() {
    return this._trackCommitTimestamp;
  }

  // track_functions - computed: true, optional: true, required: false
  private _trackFunctions?: string; 
  public get trackFunctions() {
    return this.getStringAttribute('track_functions');
  }
  public set trackFunctions(value: string) {
    this._trackFunctions = value;
  }
  public resetTrackFunctions() {
    this._trackFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackFunctionsInput() {
    return this._trackFunctions;
  }

  // track_io_timing - computed: true, optional: true, required: false
  private _trackIoTiming?: string; 
  public get trackIoTiming() {
    return this.getStringAttribute('track_io_timing');
  }
  public set trackIoTiming(value: string) {
    this._trackIoTiming = value;
  }
  public resetTrackIoTiming() {
    this._trackIoTiming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackIoTimingInput() {
    return this._trackIoTiming;
  }

  // variant - computed: true, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wal_sender_timeout - computed: true, optional: true, required: false
  private _walSenderTimeout?: number; 
  public get walSenderTimeout() {
    return this.getNumberAttribute('wal_sender_timeout');
  }
  public set walSenderTimeout(value: number) {
    this._walSenderTimeout = value;
  }
  public resetWalSenderTimeout() {
    this._walSenderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walSenderTimeoutInput() {
    return this._walSenderTimeout;
  }

  // wal_writer_delay - computed: true, optional: true, required: false
  private _walWriterDelay?: number; 
  public get walWriterDelay() {
    return this.getNumberAttribute('wal_writer_delay');
  }
  public set walWriterDelay(value: number) {
    this._walWriterDelay = value;
  }
  public resetWalWriterDelay() {
    this._walWriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walWriterDelayInput() {
    return this._walWriterDelay;
  }

  // work_mem - computed: true, optional: true, required: false
  private _workMem?: number; 
  public get workMem() {
    return this.getNumberAttribute('work_mem');
  }
  public set workMem(value: number) {
    this._workMem = value;
  }
  public resetWorkMem() {
    this._workMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workMemInput() {
    return this._workMem;
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new ManagedDatabasePostgresqlPropertiesMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: ManagedDatabasePostgresqlPropertiesMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }

  // pgbouncer - computed: false, optional: true, required: false
  private _pgbouncer = new ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference(this, "pgbouncer");
  public get pgbouncer() {
    return this._pgbouncer;
  }
  public putPgbouncer(value: ManagedDatabasePostgresqlPropertiesPgbouncer) {
    this._pgbouncer.internalValue = value;
  }
  public resetPgbouncer() {
    this._pgbouncer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerInput() {
    return this._pgbouncer.internalValue;
  }

  // pglookout - computed: false, optional: true, required: false
  private _pglookout = new ManagedDatabasePostgresqlPropertiesPglookoutOutputReference(this, "pglookout");
  public get pglookout() {
    return this._pglookout;
  }
  public putPglookout(value: ManagedDatabasePostgresqlPropertiesPglookout) {
    this._pglookout.internalValue = value;
  }
  public resetPglookout() {
    this._pglookout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pglookoutInput() {
    return this._pglookout.internalValue;
  }

  // timescaledb - computed: false, optional: true, required: false
  private _timescaledb = new ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference(this, "timescaledb");
  public get timescaledb() {
    return this._timescaledb;
  }
  public putTimescaledb(value: ManagedDatabasePostgresqlPropertiesTimescaledb) {
    this._timescaledb.internalValue = value;
  }
  public resetTimescaledb() {
    this._timescaledb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timescaledbInput() {
    return this._timescaledb.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql upcloud_managed_database_postgresql}
*/
export class ManagedDatabasePostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_managed_database_postgresql";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/managed_database_postgresql upcloud_managed_database_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDatabasePostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDatabasePostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_managed_database_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.5.0',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._name = config.name;
    this._plan = config.plan;
    this._powered = config.powered;
    this._title = config.title;
    this._zone = config.zone;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: true, optional: false, required: false
  private _components = new ManagedDatabasePostgresqlComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maintenance_window_dow - computed: true, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_time - computed: true, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_states - computed: true, optional: false, required: false
  private _nodeStates = new ManagedDatabasePostgresqlNodeStatesList(this, "node_states", false);
  public get nodeStates() {
    return this._nodeStates;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // powered - computed: false, optional: true, required: false
  private _powered?: boolean | cdktf.IResolvable; 
  public get powered() {
    return this.getBooleanAttribute('powered');
  }
  public set powered(value: boolean | cdktf.IResolvable) {
    this._powered = value;
  }
  public resetPowered() {
    this._powered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poweredInput() {
    return this._powered;
  }

  // primary_database - computed: true, optional: false, required: false
  public get primaryDatabase() {
    return this.getStringAttribute('primary_database');
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // sslmode - computed: true, optional: false, required: false
  public get sslmode() {
    return this.getStringAttribute('sslmode');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new ManagedDatabasePostgresqlPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ManagedDatabasePostgresqlProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      powered: cdktf.booleanToTerraform(this._powered),
      title: cdktf.stringToTerraform(this._title),
      zone: cdktf.stringToTerraform(this._zone),
      properties: managedDatabasePostgresqlPropertiesToTerraform(this._properties.internalValue),
    };
  }
}
