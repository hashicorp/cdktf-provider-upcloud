// https://www.terraform.io/docs/providers/upcloud/r/router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the router
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/router#name Router#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/router upcloud_router}
*/
export class Router extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_router";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/router upcloud_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterConfig
  */
  public constructor(scope: Construct, id: string, config: RouterConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_router',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.4.2',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_networks - computed: true, optional: false, required: false
  public get attachedNetworks() {
    return this.getListAttribute('attached_networks');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
